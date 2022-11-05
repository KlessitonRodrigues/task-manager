import { TodoAPI } from 'src/types/appAPI';
import { getLocalStorage } from 'src/utils/localStorage';

const DELETE: TodoAPI['DELETE'] = () => {
  getLocalStorage().taskEvent;
  return true;
};

export default DELETE;
