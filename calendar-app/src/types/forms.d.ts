type AddEventForm = {
  id?: string;
  name?: string;
  description?: string;
  dateISO?: string;
};

type EditEventForm = {
  id?: string;
  name?: string;
  description?: string;
  tagIds?: string[];
  noteId?: string;
  dateISO?: string;
};
