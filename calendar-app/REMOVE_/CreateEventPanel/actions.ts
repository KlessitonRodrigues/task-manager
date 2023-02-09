import moment from 'moment';
import { createUID } from 'src/utils/uid';

export const createEventFormMock = (): CreateEventForm => ({
  id: createUID(),
  name: '',
  description: '',
  noteId: '',
  tagIds: [],
  dateISO: '',
  repeatPeriod: 'day',
  repeatAtDays: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
  repeatUtilDate: '',
});

export const handleDateInput = (value: string, currentDate: string) => {
  const [yy, mm, dd] = value.split('-');
  const date = new Date(currentDate);
  const valueDate = new Date(`${mm}-${dd}-${yy}`);
  date.setFullYear(valueDate.getFullYear(), valueDate.getMonth(), valueDate.getDate());
  return date.toISOString();
};

export const handleTimeInput = (value: string, currentDate: string) => {
  const [hh, mm] = value.split(':');
  const date = new Date(currentDate);
  date.setHours(+hh);
  date.setMinutes(+mm);
  return date.toISOString();
};

export const handleRepeatAt = (value: EventFormRepeatAtDays[0], arr: EventFormRepeatAtDays) => {
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
    return arr;
  }
  arr.push(value);
  return arr;
};

export const handleSaveFrom = async (data: CreateEventForm) => {
  const { id, name, description, tagIds, noteId } = data;
  const eventDates = data;
};
