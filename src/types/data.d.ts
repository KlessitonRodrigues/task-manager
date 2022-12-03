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
  'event-date/create': (data: CalendarEventDate) => APIResponse<boolean>;
  'event-date/update': (data: CalendarEventDate) => APIResponse<boolean>;
  'event-date/delete': (data: CalendarEventDate) => APIResponse<boolean>;
};
