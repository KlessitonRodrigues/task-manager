import { createEvent } from './events/create';
import { readEvents } from './events/read';

export const controllers = (config: ClientConfig) => ({
  event: {
    create: createEvent(config),
    read: readEvents(config),
  },
});
