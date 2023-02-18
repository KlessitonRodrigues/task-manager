import { eventApi } from 'src/services/api/events';

export const getEvents = async () => {
  return await eventApi.getEvents({
    db: 'local',
  });
};
