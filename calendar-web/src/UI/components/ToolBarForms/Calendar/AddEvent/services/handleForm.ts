import { createUID } from 'src/utils/uid';

export const initialData: AddEventForm = {
  id: createUID(),
  dateISO: new Date().toISOString(),
  name: '',
  description: '',
  repeatBy: 'day',
  repeatAt: [],
};

export const submitEventForm = (form: AddEventForm) => {
  const data: CalendarEvent = { ...form, todos: [] };
};
