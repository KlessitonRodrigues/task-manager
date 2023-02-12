import { createEvent } from './createEvent';
import { deleteEvent } from './deleteEvent';
import { getEvents } from './getEvents';
import { updateEvent } from './updateEvent';
import { updateEventDay } from './updateEventDay';

export const eventApi = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  updateEventDay,
};
