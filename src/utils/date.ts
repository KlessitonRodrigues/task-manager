import moment from 'moment';
import { GetRepeatedEvents } from 'src/types/utils';

export const getWeekOfYear = (dateStr: string) => {
  const date = new Date(dateStr);
};

export const zeroLeft = (n: number) => (n < 10 ? '0' + n : '' + n);

export const dateObjFrom = (from?: string) => {
  const date = from ? moment(from) : moment();

  return {
    weekday: date.get('weekday'),
    month: date.get('month'),
    year: date.get('year'),
  };
};

export const getRepestedEvents = ({ dateStr, At, By, amount }: GetRepeatedEvents) => {
  const date = moment(dateStr);
};
