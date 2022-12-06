import { apiRoutes } from 'src/data/api';
import { createUID } from 'src/utils/uid';

export const createEventFormMock = (): CalendarEventForm => ({
  id: createUID(),
  name: '',
  description: '',
  noteId: '',
  tagIds: [],
  dateISO: '',
  repeatAt: ['mon'],
  repeatBy: 'week',
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

export const handleRepeatAt = (
  value: CalendarEventForm['repeatAt'][0],
  arr: CalendarEventForm['repeatAt']
) => {
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
    return arr;
  }
  arr.push(value);
  return arr;
};

export const handleSaveFrom = (data: CalendarEventForm) => {
  return apiRoutes.events.create(data);
};
