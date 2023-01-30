import * as localDb from 'src/utils/localDB';

export const deleteEvent = async (params: DeleteEventParams) => {
  const { db, eventId } = params;

  if (db === 'local') {
    const localData = localDb.readData();
    localData.events.some((ev, i) => {
      if (ev.id !== eventId) return false;
      localData.events.splice;
      return true;
    });
    localDb.writeData(localData);
  }
};
