import { currentDB, readData } from 'src/utils/localDB';

export const fetchSettings = () => {
  const db = currentDB();
  if (db === 'local') return fetchOnLocal();
  if (db === 'api') return fetchOnLocal();
};

const fetchOnLocal = () => {
  return readData().settings;
};
