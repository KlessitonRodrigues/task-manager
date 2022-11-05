import { TodoAPI } from 'src/types/appAPI';
import { getLocalStorage, setLocalStorage } from 'src/utils/localStorage';

const UPDATE: TodoAPI['UPDATE'] = data => {
  const local = getLocalStorage();

  local.taskEvent?.some((task, i) => {
    if (task.id === data.id) local.taskEvent[i] = data;
  });

  setLocalStorage(local);
  return true;
};

export default UPDATE;
