import * as localDb from 'src/utils/localDB';

export const getEvents = async (params: getEventParams) => {
  const { db, fromDate, toDate } = params;
  if (db === 'local') return localDb.readData().events || [];
};
