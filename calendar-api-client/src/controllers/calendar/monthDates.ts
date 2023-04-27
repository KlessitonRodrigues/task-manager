import moment from 'moment';

export const monthDates = (config: ClientConfig) => (dateStr: string) => {
  const dateObj = moment(dateStr);
  const firstMonthDate = moment(dateStr).startOf('month');
  const lastMonthDate = moment(dateStr).endOf('month');
  const monthDates = [];

  return {};
};
