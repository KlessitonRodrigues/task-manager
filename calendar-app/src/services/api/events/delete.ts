import * as localDb from 'src/utils/localDB';

export const deleteEvent = async (params: DeleteEventParams) => {
  const db = localDb.currentDB();
  if (db === 'local') return deleteOnLocal(params);
  if (db === 'api') return deleteOnApi(params);
};

const deleteOnLocal = (params: DeleteEventParams) => {
  const { eventId } = params;

  const localData = localDb.readData();
  localData.events.some((ev, i) => {
    if (ev.id !== eventId) return false;
    localData.events.splice;
    return true;
  });
  localDb.writeData(localData);
};

const deleteOnApi = (params: DeleteEventParams) => {};
