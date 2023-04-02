type getEventParams = {};

type CreateEventParams = {
  data: CalendarEvent;
};

type UpdateEventParams = {
  data: CalendarEvent;
};

type DeleteEventParams = {
  eventId: string;
};

type UpdateSettingsParams = {
  data: LocalDB['settings'];
};

type UpdateTodoParams = {
  data: CalendarDayEvent;
};
