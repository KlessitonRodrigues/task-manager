import { TodoAPI } from 'src/types/appAPI';
import { getLocalStorage } from 'src/utils/localStorage';

const LIST: TodoAPI['LIST'] = () => {
  return getLocalStorage().taskEvent || [];
};

export default LIST;
