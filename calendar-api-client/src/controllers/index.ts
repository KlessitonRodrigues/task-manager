import { monthDates } from './calendar/monthDates';
import { splitDate } from './calendar/splitDate';

import { createEvent } from './events/create';
import { readEvents } from './events/read';
import { updateEvent } from './events/update';
import { deleteEvent } from './events/delete';

export const controllers = (config: ClientConfig) => ({
  calendar: {
    monthDates,
    splitDate,
  },

  event: {
    create: createEvent(config),
    read: readEvents(config),
    update: updateEvent(config),
    delete: deleteEvent(config),
  },
});
