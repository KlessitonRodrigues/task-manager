import * as localDb from 'src/utils/localDB';

export const fetchEvent = async (params: FetchEventParams) => {
  const { db, fromDate, toDate } = params;
  if (db === 'local') return localDb.readData()?.events || [];
};
