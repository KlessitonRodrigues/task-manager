type AddEventForm = {
  id?: string;
  name?: string;
  description?: string;
  dateISO?: string;
  repeatBy?: CalendarEvent['repeatBy'];
  repeatAt?: CalendarEvent['repeatAt'];
};

type EditEventForm = {
  id?: string;
  name?: string;
  description?: string;
  tagIds?: string[];
  noteId?: string;
  dateISO?: string;
};
