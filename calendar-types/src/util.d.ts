type WeekDayName = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

type DateInfo = {
  day: number;
  month: number;
  year: number;
  weekDay: number;
  weekDayName: string;
  weekOfYear: number;
  sec: number;
  min: number;
  hour: number;
  unix: number;
  dateKey: string;
  timeKey: string;
  key: string;
};
