type LocalStorage = {
  updateAt: number;
  data: {
    events: CalendarEvent[];
    eventsDate: CalendarEventDay[];
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
  'event-date/create': (data: CalendarEventDay[]) => APIResponse<boolean>;
  'event-date/update': (data: CalendarEventDay) => APIResponse<boolean>;
  'event-date/delete': (data: CalendarEventDay) => APIResponse<boolean>;
};
