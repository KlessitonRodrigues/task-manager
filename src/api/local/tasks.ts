import moment from 'moment';
import { LocalStorage } from 'src/types/localStorage';
import { newTodoEventMock, TodoEvent } from 'src/types/todoEvent';
import { getLocalStorage, setLocalStorage } from 'src/utils/localStorage';
import { createUID } from 'src/utils/uid';

export default {
  CREATE: (data: TodoEvent) => {
    const local = getLocalStorage();
    const groupId = createUID();
    let newEvents: TodoEvent[] = [];

    // source-event
    data.id = createUID();
    data.group.id = groupId;
    data.group.groupindex = 0;
    newEvents.push(data);

    // repeat-event
    const repeatByArr = Array(data.group.repeatTimes).fill('');
    const repeatByDates = repeatByArr.map((v, i) =>
      moment(data.dateISO)
        .add(i + 1, data.group.repeatBy)
        .toISOString()
    );

    repeatByDates.forEach((eventDate, i) => {
      newEvents.push({
        ...data,
        id: createUID(),
        dateISO: eventDate,
        group: {
          ...data.group,
          groupindex: i + 1,
        },
      });
    });

    // filter-by-selected-weeks
    newEvents = newEvents.filter(event => {
      const weekdayindex = moment(event.dateISO).get('weekday');
      const weekdayName = newTodoEventMock().group.repeatAt[weekdayindex];
      return data.group.repeatAt.includes(weekdayName);
    });

    if (!local.taskEvent) local.taskEvent = [];
    local.taskEvent.push(...newEvents);
    setLocalStorage(local);
    return local;
  },

  UPDATE: (local: LocalStorage, data: TodoEvent) => {
    local.taskEvent?.some((task, i) => {
      if (task.id === data.id) local.taskEvent[i] = data;
    });

    setLocalStorage(local);
    return local;
  },

  REMOVE: (data: TodoEvent) => {
    const local = getLocalStorage();
    setLocalStorage(local);
    return local;
  },

  READTASKS: () => {
    return getLocalStorage().taskEvent || [];
  },

  READTASKSBYINTERVAL: (interval: { start: string; end: string }) => {
    const local = getLocalStorage();
    const intervalTimeStart = new Date(interval.start).getTime();
    const intervalTimeEnd = new Date(interval.end).getTime();

    const taskEvents = local.taskEvent?.filter(event => {
      const eventTime = new Date(event.dateISO).getTime();
      return eventTime >= intervalTimeStart && eventTime <= intervalTimeEnd;
    });

    return taskEvents;
  },
};
