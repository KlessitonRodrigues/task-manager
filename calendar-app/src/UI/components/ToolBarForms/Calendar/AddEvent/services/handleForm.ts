import moment from 'moment';
import { eventApi } from 'src/services/api/events';
import { createUID } from 'src/utils/uid';

export const initialData: AddEventForm = {
  id: createUID(),
  dateISO: new Date().toISOString(),
  name: '',
  description: '',
  repeatBy: '',
  repeatAt: [],
};

export const submitEventForm = (form: AddEventForm) => {
  const data: CalendarEvent = { ...form, eventDays: [] };
  eventApi.createEvent({ db: 'local', data });
};
