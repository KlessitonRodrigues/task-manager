type EventDayStatus = 'cancel' | 'todo' | 'doing' | 'done';

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
  repeatBy?: '' | 'week' | '2-week' | 'month';
  repeatAt?: ('mon' | 'tue' | 'wen' | 'tur' | 'fri' | 'sat' | 'sun')[];
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
