type EventDayStatus = 'cancel' | 'todo' | 'doing' | 'done';

type EventDay = {
  id?: string;
  status?: EventDayStatus;
  doingTime?: number;
  unixDate?: number;
};

type CalendarEvent = {
  id?: string;
  name?: string;
  description?: string;
  tagIds?: string[];
  noteId?: string;
  eventDays: EventDay[];
};

type EventFormRepeatPeriod = 'day' | 'month';

type EventFormRepeatAtDays = ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[];

type CalendarDayData = {
  date: { day: number; month: number };
  dayEvents: CalendarEvent[];
};

type CalendarWeekData = {
  weekOfYear: number;
  daysData: CalendarDayData[];
};

type CalendarData = CalendarWeekData[];
