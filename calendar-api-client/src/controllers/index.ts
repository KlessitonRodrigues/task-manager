import { dates } from './calendar/dates';
import { datesByColumns } from './calendar/datesByColumns';
import { initLocalData } from './database/initLocalData';
import { createEvent } from './events/create';
import { deleteEvent } from './events/delete';
import { readEvents } from './events/read';
import { readByWeekDay } from './events/readByWeekDay';
import { updateEvent } from './events/update';

export const controllers = (config: ClientConfig) => ({
  calendar: {
    dates,
    datesByColumns,
  },

  database: {
    initLocalData: initLocalData(config),
  },

  event: {
    create: createEvent(config),
    read: readEvents(config),
    readByWeekDay: readByWeekDay(config),
    update: updateEvent(config),
    delete: deleteEvent(config),
  },
});
