import * as localDb from 'src/utils/localDB';

export const updateEvent = async (params: UpdateEventParams) => {
  const db = localDb.currentDB();
  if (db === 'local') return updateOnLocal(params);
  if (db === 'api') return updateOnApi(params);
};

const updateOnLocal = (params: UpdateEventParams) => {
  const { data } = params;
  const localData = localDb.readData();

  localData.events.some((ev, i) => {
    if (ev.id !== data.id) return false;
    localData.events[i] = data;
    return true;
  });
  localDb.writeData(localData);
};

const updateOnApi = (params: UpdateEventParams) => {};
