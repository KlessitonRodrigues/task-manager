import * as localDb from 'src/utils/localDB';

export const createEvent = async (db: DBOption, data: CalendarEvent) => {
  if (db === 'local') {
    const localData = localDb.readData();
    localData.events.push(data);
    localDb.writeData(localData);
  }
};
