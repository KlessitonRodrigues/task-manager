const dbName = 'calendar_app_data';

export const initialLocalDB: LocalDB = {
  lastUpdate: '',
  settings: { dbLocation: 'local', theme: { mode: 'dark', main: '#3260a8', alter: '#ff0000' } },
  events: [],
};

export const readData = (): LocalDB => {
  const data = JSON.parse(window.localStorage.getItem(dbName) || '{}') as LocalDB;
  if (!data.lastUpdate) {
    writeData(initialLocalDB);
    return initialLocalDB;
  }
  return data;
};

export const writeData = (data: LocalDB) => {
  data.lastUpdate = new Date().toISOString();
  window.localStorage.setItem(dbName, JSON.stringify(data));
  return data;
};

export const currentDB = () => {
  return readData().settings.dbLocation;
};
