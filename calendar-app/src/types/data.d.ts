type CalendarEvent = {
  id?: string;
  name?: string;
  description?: string;
  tagIds?: string[];
  noteId?: string;
};

type CalendarEventDate = {
  id?: string;
  eventId?: string;
  status?: 'cancelled' | 'todo' | 'doing' | 'done';
  date: { unix: number; iso: string };
  time: { unix: number };
};

type _CalendarEventOccurence = {
  id?: string;
  date: { unix: number; iso: string };
  status: 'cancelled' | 'todo' | 'doing' | 'done';
  time: number;
};

type _CalendarEvent = {
  id?: string;
  name?: string;
  description?: string;
  occurrences?: _CalendarEventOccurence[];
};

type EventFormRepeatPeriod = 'day' | 'month';

type EventFormRepeatAtDays = ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[];

type EventsAndDates = { events: CalendarEvent[]; dates: CalendarEventDate[] };

type JoinEventAndDate = CalendarEventDate & { event: CalendarEvent };

type DayData = {
  dayNumber: number;
  dayMonth: number;
  dayEvents: JoinEventAndDate[];
};

type WeekData = {
  weekOfYear: number;
  daysISO: DayData[];
};

type CalendarData = {
  week1: WeekData;
  week2: WeekData;
  week3: WeekData;
  week4: WeekData;
  week5: WeekData;
  week6: WeekData;
};

type DateObj = {
  weekDay: number;
  dayOfMonth: number;
  month: number;
  year: number;
};
