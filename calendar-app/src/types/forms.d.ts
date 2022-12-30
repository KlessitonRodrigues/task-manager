type CreateEventForm = {
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

type EditEventForm = {
  id?: string;
  name?: string;
  description?: string;
  tagIds?: string[];
  noteId?: string;
  dateISO?: string;
};
