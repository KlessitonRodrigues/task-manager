import { currentDB, readData, writeData } from 'src/utils/localDB';

export const createEvent = async (params: CreateEventParams) => {
  const { data } = params;
  const db = currentDB();
  if (db === 'local') updateOnLocal(data);
  else if (db === 'api') await updateOnApi(data);
};

const updateOnLocal = (data: CalendarEvent) => {
  const localData = readData();
  localData.events.push(data);
  writeData(localData);
};

const updateOnApi = async (data: CalendarEvent) => {};
