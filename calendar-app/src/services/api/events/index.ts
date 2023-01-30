import { createEvent } from './createEvent';
import { deleteEvent } from './deleteEvent';
import { fetchEvent } from './fetchEvent';
import { updateEvent } from './updateEvent';
import { updateEventDay } from './updateEventDay';

export const eventApi = {
  fetchEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  updateEventDay,
};
