type EventDayStatus = 'cancel' | 'todo' | 'doing' | 'done';

type EventFormRepeatPeriod = 'day' | 'week' | '2-week' | 'month';

type EventFormRepeatAtDays = ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[];

type EventDay = {
  id?: string;
  status?: EventDayStatus;
  doingTime?: number;
  dateISO?: string;
};

type CalendarEvent = {
  id?: string;
  name?: string;
  description?: string;
  dateISO?: string;
  repeatBy?: EventFormRepeatPeriod;
  repeatAt?: EventFormRepeatAtDays;
  eventDays: EventDay[];
};

type CalendarDayData = {
  date: { day: number; month: number };
  dayEvents: CalendarEvent[];
};

type CalendarWeekData = {
  weekOfYear: number;
  daysData: CalendarDayData[];
};

type CalendarData = CalendarWeekData[];
