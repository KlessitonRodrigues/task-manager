import moment from 'moment';

export const monthDate = {
  next: (date: string) => moment(date).add(1, 'month').toISOString(),
  prev: (date: string) => moment(date).add(-1, 'month').toISOString(),
};
