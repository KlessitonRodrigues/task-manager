import * as localDb from 'src/utils/localDB';

export const editEvent = async (db: DBOption, data: CalendarEvent) => {
  if (db === 'local') {
    const localData = localDb.readData();
    localData.events.some((ev, i) => {
      if (ev.id !== data.id) return false;
      localData.events[i] = data;
      return true;
    });
    localDb.writeData(localData);
  }
};
