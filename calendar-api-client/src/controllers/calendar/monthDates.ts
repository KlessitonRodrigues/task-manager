import moment, { Moment } from 'moment';

export const monthDates = (dateStr: string) => {
  const firstMonthDate = moment(dateStr).startOf('month');
  const lastMonthDate = moment(dateStr).endOf('month');

  const monthDays = getMonthDays(firstMonthDate, [moment(firstMonthDate)]);
  const monthWeeks = splitWeeks(monthDays);

  return {
    firstMonthDate,
    lastMonthDate,
    monthDays,
    monthWeeks,
  };
};

const getMonthDays = (firstDay: Moment, days: Moment[]): Moment[] => {
  const currentDay = days[days.length - 1];
  currentDay.add(1, 'day');
  if (firstDay.get('month') === currentDay.get('month')) {
    days.push(moment(currentDay));
    return getMonthDays(firstDay, days);
  }
  return days;
};

const splitWeeks = (days: Moment[]) => {
  const weeks: Moment[][] = [];
  const getWeek = (arr: Moment[]) => {
    weeks.push(arr.slice(0, 6));
    if (arr.length) getWeek(arr);
  };
  return weeks;
};
