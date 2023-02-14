import moment from 'moment';
import { eventApi } from 'src/services/api/events';

export const getEvents = async (dateStr: string) => {
  return await eventApi.getEvents({
    db: 'local',
    fromDate: moment(dateStr).startOf('month').startOf('week').toISOString(),
    toDate: moment(dateStr).endOf('month').endOf('week').toISOString(),
  });
};
