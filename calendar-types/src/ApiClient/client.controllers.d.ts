type CalendarDatesArgs = {
  currentDate: string;
};

type CalendarDatesByColumnArgs = CalendarDatesArgs & {
  columns: number;
};

type ReadEventsArgs = {
  dateGap?: { start: string; end: string };
  month?: string;
};

type ReadEventByWeekDayArgs = ReadEventsArgs & {};
