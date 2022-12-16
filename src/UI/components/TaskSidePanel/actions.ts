import moment from 'moment';
import { apiRoutes } from 'src/data/api';
import { createUID } from 'src/utils/uid';

export const createEventFormMock = (): EventForm => ({
  id: createUID(),
  name: '',
  description: '',
  noteId: '',
  tagIds: [],
  dateISO: '',
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

const generateEventDates = (data: EventForm): CalendarEventDate[] => {
  const { repeatUtilDate, repeatAtDays, repeatPeriod, id, dateISO } = data;
  const dates: CalendarEventDate[] = [];
  const startDate = moment(dateISO);
  const daysUtilEndDate = startDate.diff(repeatUtilDate, 'days');

  for (let i = 0; dates.length < daysUtilEndDate; i++) {
    const eventDate = startDate.add(i, repeatPeriod);
    const dayOfWeek = eventDate
      .format('dddd')
      .substring(0, 3)
      .toLocaleLowerCase() as EventFormRepeatAtDays[0];

    if (repeatAtDays.includes(dayOfWeek))
      dates.push({
        id: createUID(),
        eventId: id,
        status: 'todo',
        dateISO: eventDate.toISOString(),
        dateTime: eventDate.unix(),
      });
  }

  return dates;
};

export const handleSaveFrom = async (data: EventForm) => {
  const { id, name, description, tagIds, noteId } = data;
  const CalendarEent: CalendarEvent = { id, name, description, tagIds, noteId };
  const eventDates = generateEventDates(data);
  console.log('SUBMIT', data, CalendarEent, eventDates);

  await apiRoutes.events.create(CalendarEent);
  await apiRoutes.eventDates.create(eventDates);
};
