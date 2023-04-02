import { api } from 'src/services/api/routes';

export const getEvents = async () => {
  return await api.events.fetchEvents();
};
