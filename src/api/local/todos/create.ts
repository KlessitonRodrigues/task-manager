import moment, { Moment } from 'moment';
import { TodoAPI } from 'src/types/appAPI';
import { newTodoEventMock, TodoEvent, TodoEventGroup } from 'src/types/todoEvent';
import { getLocalStorage, setLocalStorage } from 'src/utils/localStorage';
import { createUID } from 'src/utils/uid';

const CREATE: TodoAPI['CREATE'] = data => {
  const local = getLocalStorage();
  const groupId = createUID();
  let newEvents: TodoEvent[] = [];

  // source-event
  data.id = createUID();
  data.group.id = groupId;
  data.group.groupindex = 0;
  newEvents.push(data);

  // verify-selected-weeksday
  const isSelectedWeekday = (date: Moment) => {
    const weekdayindex = date.get('weekday');
    const weekdayName = newTodoEventMock().group.repeatAt[weekdayindex];
    return data.group.repeatAt.includes(weekdayName);
  };

  // get-next-date-by-period
  const getNextDate = (date: Moment, period: TodoEventGroup['repeatBy']): Moment => {
    const nextDate = date.add(1, period);
    if (period === 'day' && !isSelectedWeekday(nextDate)) return getNextDate(nextDate, period);
    return nextDate;
  };

  // repeat-event
  const repeatByArr = Array(data.group.repeatTimes).fill('');
  repeatByArr.forEach(
    (v, i, arr: string[]) =>
      (arr[i] = getNextDate(moment(arr[i - 1] || data.dateISO), data.group.repeatBy).toISOString())
  );

  // merge-source-and-repeat-events
  repeatByArr.forEach((eventDate, i) => {
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
  return true;
};

export default CREATE;
