import * as localDb from 'src/utils/localDB';

export const fetchEvents = async () => {
  const db = localDb.currentDB();
  if (db === 'local') return fetchOnLocal();
  if (db === 'api') return fetchOnLocal();
};

const fetchOnLocal = () => {
  return localDb.readData().events;
};
