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
  dateISO?: string;
  dateTime?: number;
  startedAt?: number;
  completedAt?: number;
};

type EventFormRepeatPeriod = 'day' | 'month';

type EventFormRepeatAtDays = ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[];

type EventForm = {
  id?: string;
  name?: string;
  description?: string;
  tagIds?: string[];
  noteId?: string;
  dateISO?: string;
  repeatPeriod?: EventFormRepeatPeriod;
  repeatAtDays?: EventFormRepeatAtDays;
  repeatUtilDate?: string;
};

type EventsAndDates = { events: CalendarEvent[]; dates: CalendarEventDate[] };

type LocalStorage = {
  updateAt: number;
  data: {
    events: CalendarEvent[];
    eventsDate: CalendarEventDate[];
  };
};

type APIResponse<T> = Promise<{
  success: boolean;
  message: string;
  data: T;
}>;

type APIRoutes = {
  // events
  'event/read': () => APIResponse<CalendarEvent[]>;
  'event/create': (data: CalendarEvent) => APIResponse<boolean>;
  'event/update': (data: CalendarEvent) => APIResponse<boolean>;
  'event/delete': (data: CalendarEvent) => APIResponse<boolean>;

  // event dates
  'event-date/read': (from: number, to: number) => APIResponse<EventsAndDates>;
  'event-date/create': (data: CalendarEventDate[]) => APIResponse<boolean>;
  'event-date/update': (data: CalendarEventDate) => APIResponse<boolean>;
  'event-date/delete': (data: CalendarEventDate) => APIResponse<boolean>;
};

type DayData = {
  dayNumber: number;
  dayMonth: number;
  dayTasks: CalendarEvent[];
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
