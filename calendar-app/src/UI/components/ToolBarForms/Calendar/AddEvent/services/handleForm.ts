import { eventApi } from 'src/services/api/events';
import { createUID } from 'src/utils/uid';

export const initialData: AddEventForm = {
  id: createUID(),
  dateISO: new Date().toISOString(),
  name: '',
  description: '',
};

export const submitEventForm = (form: AddEventForm) => {
  const data: CalendarEvent = { ...form, eventDays: [] };
  data.eventDays.push({ id: createUID(), dateISO: form.dateISO });
  eventApi.createEvent({ db: 'local', data });
};
