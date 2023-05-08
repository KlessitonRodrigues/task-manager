import moment from 'moment';

import { getDays } from './services/getDays';

export const dates = (args: CalendarDatesArgs) => {
  const { currentDate } = args;
  const firstMonthDay = moment(currentDate).startOf('month').startOf('week');
  const lastMonthDay = moment(currentDate).endOf('month').endOf('week');
  const daysArr = getDays(firstMonthDay, lastMonthDay);

  return daysArr;
};
