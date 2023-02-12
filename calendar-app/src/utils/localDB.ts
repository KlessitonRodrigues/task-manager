const dbName = 'calendar_app_data';

export const initialLocalDB: LocalDB = { events: [], lastUpdate: '' };

export const readData = (): LocalDB => {
  const data = JSON.parse(window.localStorage.getItem(dbName) || '{}') as LocalDB;
  if (!data.lastUpdate) return initialLocalDB;
  return data;
};

export const writeData = (data: LocalDB) => {
  data.lastUpdate = new Date().toISOString();
  window.localStorage.setItem(dbName, JSON.stringify(data));
  return data;
};
