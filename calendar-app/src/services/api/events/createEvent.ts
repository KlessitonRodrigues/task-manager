import * as localDb from 'src/utils/localDB';

export const createEvent = async (params: CreateEventParams) => {
  const { db, data } = params;

  if (db === 'local') {
    const localData = localDb.readData();
    localData.events.push(data);
    localDb.writeData(localData);
  }
};
