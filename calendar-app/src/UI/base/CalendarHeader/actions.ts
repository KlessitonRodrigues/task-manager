import moment from 'moment';

export const handleDateChange = (date: Date, change: 'nextMonth' | 'prevMonth' | 'today') => {
  return {
    nextMonth: () => moment(date).add(1, 'month').toISOString(),
    prevMonth: () => moment(date).add(-1, 'month').toISOString(),
    today: () => new Date().toISOString(),
  }[change]();
};
