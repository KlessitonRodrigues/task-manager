import moment, { Moment } from 'moment';

import { splitDate } from './splitDate';

export const getDays = (firstDay: Moment, lastDay: Moment) => {
  const daysArr: DateInfo[] = [];
  const curremtDay = moment(firstDay);

  if (firstDay.unix < lastDay.unix) return daysArr;

  let i = 0;
  while (curremtDay.unix() < lastDay.unix()) {
    daysArr.push(splitDate(moment(curremtDay)));
    curremtDay.add(1, 'day');
    i++;
  }

  return daysArr;
};
