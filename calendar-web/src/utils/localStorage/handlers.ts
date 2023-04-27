export const storageHandlers = (dbName: string) => ({
  read: (): LocalDataBase => {
    const data = JSON.parse(window.localStorage.getItem(dbName) || '{}') as LocalDataBase;
    return data;
  },

  write: (data: LocalDataBase) => {
    data.lastUpdate = new Date().toISOString();
    window.localStorage.setItem(dbName, JSON.stringify(data));
    return data;
  },
});
