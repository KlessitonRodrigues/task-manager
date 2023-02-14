import { generateOccurecies } from 'src/utils/date';
import * as localDb from 'src/utils/localDB';

export const getEvents = async (params: getEventParams) => {
  const { db, fromDate, toDate } = params;

  if (db === 'local') {
    const data = localDb.readData().events || [];
    return generateOccurecies(data, fromDate, toDate);
  }
};
