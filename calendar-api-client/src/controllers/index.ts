import { dates } from './calendar/dates';
import { datesByColumns } from './calendar/datesByColumns';
import { resetLocalData } from './database/resetLocalData';
import { createEvent } from './events/create';
import { deleteEvent } from './events/delete';
import { readEvents } from './events/read';
import { updateEvent } from './events/update';

export const controllers = (config: ClientConfig) => ({
  calendar: {
    dates,
    datesByColumns,
  },

  database: {
    resetLocalData,
  },

  event: {
    create: createEvent(config),
    read: readEvents(config),
    update: updateEvent(config),
    delete: deleteEvent(config),
  },
});
