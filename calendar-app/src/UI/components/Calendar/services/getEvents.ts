import { routes } from 'src/services/api/routes';

export const getEvents = async () => {
  return await routes.events.fetchEvents();
};
