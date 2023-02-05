import moment from 'moment';
import { eventApi } from 'src/services/api/events';

export const getEvents = async (dateStr: string) => {
  const date = moment(dateStr);
  return await eventApi.fetchEvent({
    db: 'local',
    fromDate: date.startOf('month').startOf('week').unix(),
    toDate: date.endOf('month').endOf('week').unix(),
  });
};
