import { createEvent } from './events/create';
import { deleteEvent } from './events/delete';
import { fetchEvents } from './events/fetch';
import { updateEvent } from './events/update';
import { fetchSettings } from './settings/fetch';
import { updateSettings } from './settings/update';
import { deleteTodo } from './todos/delete';
import { updateTodo } from './todos/update';

export const routes = {
  events: {
    createEvent,
    deleteEvent,
    fetchEvents,
    updateEvent,
  },
  todos: {
    deleteTodo,
    updateTodo,
  },
  settings: {
    fetchSettings,
    updateSettings,
  },
};
