import moment from 'moment';

export const zeroLeft = (n: number) => (n < 10 ? '0' + n : '' + n);

export const dateObjFrom = (from?: string) => {
  const date = from ? moment(from) : moment();

  return {
    weekday: date.get('weekday'),
    month: date.get('month'),
    year: date.get('year'),
  };
};

export const getTimeFormat = (): Intl.DateTimeFormatOptions => ({
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});
