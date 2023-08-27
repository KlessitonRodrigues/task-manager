import moment from 'moment';

import { splitDate } from '../dates/services/splitDate';

export const dateInfo = (args: CalendarDateInfoArgs) => {
  return splitDate(moment(args.current));
};
