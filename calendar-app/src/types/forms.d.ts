type AddEvent = {
  id?: string;
  name?: string;
  description?: string;
  dateUnix?: number;
};

type EditEvent = {
  id?: string;
  name?: string;
  description?: string;
  tagIds?: string[];
  noteId?: string;
  dateISO?: string;
};
