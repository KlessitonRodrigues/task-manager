type getEventParams = {
  db: DBOption;
  fromDate?: number;
  toDate?: number;
};

type CreateEventParams = {
  db: DBOption;
  data: CalendarEvent;
};

type UpdateEventParams = {
  db: DBOption;
  data: CalendarEvent;
};

type DeleteEventParams = {
  db: DBOption;
  eventId: string;
};
