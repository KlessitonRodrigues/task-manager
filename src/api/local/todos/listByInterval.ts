import { TodoAPI } from 'src/types/appAPI';
import { getLocalStorage } from 'src/utils/localStorage';

const LISTBYINTERVAL: TodoAPI['LISTBYINTERVAL'] = interval => {
  const local = getLocalStorage();
  const intervalTimeStart = new Date(interval.start).getTime();
  const intervalTimeEnd = new Date(interval.end).getTime();

  const taskEvents = local.taskEvent?.filter(event => {
    const eventTime = new Date(event.dateISO).getTime();
    return eventTime >= intervalTimeStart && eventTime <= intervalTimeEnd;
  });

  return taskEvents;
};

export default LISTBYINTERVAL;
