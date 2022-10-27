import { LocalStorage } from 'src/@types/localStorage';
import { TaskEvent } from 'src/@types/taskEvent';

const create = (local: LocalStorage, data: TaskEvent) => {
  if (!local.taskEvent) local.taskEvent = [];
  local.taskEvent.push(data);
  return local;
};

const update = (local: LocalStorage, data: TaskEvent) => {
  local.taskEvent.some((task, i) => {
    if (task.id === data.id) local.taskEvent[i] = data;
  });
  return local;
};

const remove = (local: LocalStorage, data: TaskEvent) => {
  local.taskEvent.push(data);
  return local;
};

export default {
  create,
  update,
  remove,
};
