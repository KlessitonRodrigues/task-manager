import moment, { Moment } from 'moment';

import { weekName } from './weekName';

export const splitDate = (date: Moment): SplitedDate => {
  const splited = {
    day: date.get('date'),
    month: date.get('month'),
    year: date.get('year'),
    weekDay: date.get('weekday'),
    weekDayName: weekName[date.get('weekday') as keyof typeof weekName],
    weekOfYear: date.get('weeks'),
    sec: date.get('second'),
    min: date.get('minute'),
    hour: date.get('hour'),
    unix: date.unix(),
  };

  const dateKey = `${splited.day}-${splited.month}-${splited.year}`;
  const weekKey = `${splited.weekDayName}-${splited.weekDay}-${splited.weekOfYear}`;
  const timeKey = `${splited.hour}-${splited.min}-${splited.sec}`;
  const key = `${dateKey}#${timeKey}#${weekKey}`;

  return {
    ...splited,
    dateKey,
    weekKey,
    timeKey,
    key,
  };
};

export const splitStringDate = (date: string) => splitDate(moment(date));
