import moment from 'moment';
import { splitDate } from '../dates/services/splitDate';

export const dateNow = () => {
  return splitDate(moment());
};
