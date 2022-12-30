import { localAPI } from 'src/services/database/local';

import { eventDates } from './eventDates';
import { events } from './events';

export const apiRoutes = {
  eventDates: eventDates(localAPI),
  events: events(localAPI),
};
