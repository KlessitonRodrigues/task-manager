const dbName = 'calendar_app_data';

export const readData = (): LocalDB => {
  const data = JSON.parse(window.localStorage.getItem(dbName) || '{}');
  return data;
};

export const writeData = (data: LocalDB) => {
  data.lastUpdate = Date.now();
  window.localStorage.setItem(dbName, JSON.stringify(data));
  return data;
};
