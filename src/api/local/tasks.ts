import { getLocalStorage, setLocalStorage } from '@utils/localStorage';
import { LocalStorage } from 'src/@types/localStorage';
import { TaskEvent } from 'src/@types/taskEvent';

const create = (local: LocalStorage, data: TaskEvent) => {
  if (!local.taskEvent) local.taskEvent = [];
  local.taskEvent.push(data);

  setLocalStorage(local);
  return local;
};

const update = (local: LocalStorage, data: TaskEvent) => {
  local.taskEvent.some((task, i) => {
    if (task.id === data.id) local.taskEvent[i] = data;
  });

  setLocalStorage(local);
  return local;
};

const remove = (local: LocalStorage, data: TaskEvent) => {
  local.taskEvent.push(data);

  setLocalStorage(local);
  return local;
};

const readTasks = () => {
  return getLocalStorage().taskEvent || [];
};

const readTasksByInterval = (interval: { start: string; end: string }) => {
  const local = getLocalStorage();
  const intervalTimeStart = new Date(interval.start).getTime();
  const intervalTimeEnd = new Date(interval.end).getTime();

  const taskEvents = local.taskEvent.filter(event => {
    const eventTime = new Date(event.dateISO).getTime();
    return eventTime >= intervalTimeStart && eventTime <= intervalTimeEnd;
  });

  return taskEvents;
};

export default {
  create,
  update,
  remove,
  readTasks,
  readTasksByInterval,
};
