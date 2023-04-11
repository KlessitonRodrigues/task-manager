import moment from 'moment';

export const calendarGap = (dateStr: string) => {
  const firstDayObj = moment(dateStr).startOf('month').set('weekday', 0);
  const lastDayObj = moment(dateStr).endOf('month').set('weekday', 6).add(1, 'week');

  return {
    firstDayObj,
    lastDayObj,
    firstDay: firstDayObj.toString(),
    lastDay: lastDayObj.toString(),
  };
};
