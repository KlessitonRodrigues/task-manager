type CalendarDatesArgs = {
  currentDate: string;
};

type CalendarDatesByColumnArgs = {
  currentDate: string;
  columns: number;
};

type ReadEventsArgs = {
  dateGap?: { start: string; end: string };
  month?: string;
};
