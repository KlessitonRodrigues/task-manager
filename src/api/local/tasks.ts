import { getLocalStorage, setLocalStorage } from '@utils/localStorage';
import { createUID } from '@utils/uid';
import moment from 'moment';
import { LocalStorage } from 'src/@types/localStorage';
import { TaskEvent } from 'src/@types/taskEvent';

export default {
  CREATE: (data: TaskEvent) => {
    const local = getLocalStorage();
    const groupId = createUID();
    const newEvents: TaskEvent[] = [];

    // source-event
    data.id = createUID();
    data.group.id = groupId;
    data.group.groupindex = 0;
    newEvents.push(data);

    // repeat-events
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

    if (!local.taskEvent) local.taskEvent = [];
    local.taskEvent.push(...newEvents);
    setLocalStorage(local);
    return local;
  },

  UPDATE: (local: LocalStorage, data: TaskEvent) => {
    local.taskEvent?.some((task, i) => {
      if (task.id === data.id) local.taskEvent[i] = data;
    });

    setLocalStorage(local);
    return local;
  },

  REMOVE: (data: TaskEvent) => {
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
