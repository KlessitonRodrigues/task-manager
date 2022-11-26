export type GetRepeatedEvents = {
  dateStr: string;
  By: 'day' | 'week' | 'month' | 'year';
  At: 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';
  amount: number;
};
