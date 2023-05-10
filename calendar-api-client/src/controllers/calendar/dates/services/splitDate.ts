import moment, { Moment } from 'moment';

import { weekName } from '../../../../utils/date/weekNames';

export const splitDate = (date: string | Moment): DateInfo => {
  const dateObj = moment(date);

  const splited = {
    day: dateObj.get('date'),
    month: dateObj.get('month'),
    year: dateObj.get('year'),
    weekDay: dateObj.get('weekday'),
    weekDayName: weekName[dateObj.get('weekday') as keyof typeof weekName] as WeekDayName,
    weekOfYear: dateObj.get('weeks'),
    sec: dateObj.get('second'),
    min: dateObj.get('minute'),
    hour: dateObj.get('hour'),
    unix: dateObj.unix(),
  };

  const dateKey = `${splited.day}-${splited.month}-${splited.year}`;
  const timeKey = `${splited.hour}-${splited.min}-${splited.sec}`;
  const key = `${dateKey}#${timeKey}`;

  return {
    ...splited,
    dateKey,
    timeKey,
    key,
  };
};
