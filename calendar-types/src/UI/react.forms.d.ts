type AddEventForm = {
  name?: string;
  description?: string;
  occurency?: 'unique' | 'weekly';
  time?: string;
  date?: WeekDayName[];
  weekDays?: WeekDayName[];
  repeatBy?: CalendarEvent['repeatBy'];
  repeatAt?: CalendarEvent['repeatAt'];
};

type EditEventForm = {
  name?: string;
  description?: string;
  tagIds?: string[];
  noteId?: string;
  dateISO?: string;
};
