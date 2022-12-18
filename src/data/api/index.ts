import { localAPI } from 'src/data/apiRoutes/local';

import { eventDates } from './eventDates';
import { events } from './events';

export const apiRoutes = {
  eventDates: eventDates(localAPI),
  events: events(localAPI),
};
