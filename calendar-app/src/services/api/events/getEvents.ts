import * as localDb from 'src/utils/localDB';

export const getEvents = async (params: getEventParams) => {
  const { db } = params;

  if (db === 'local') {
    return localDb.readData().events || [];
  }
};
