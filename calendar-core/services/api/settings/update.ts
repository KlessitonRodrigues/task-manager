import { currentDB, readData, writeData } from 'src/utils/localDB';

export const updateSettings = (params: UpdateSettingsParams) => {
  const db = currentDB();
  if (db === 'local') return updateOnLocal(params);
  if (db === 'api') return updateOnLocal(params);
};

const updateOnLocal = (params: UpdateSettingsParams) => {
  const localData = readData();
  return writeData({ ...localData, settings: params.data });
};
