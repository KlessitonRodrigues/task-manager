export const globalState: GlobalState = {
  path: '/',
  currentDate: new Date().toISOString(),
  settings: { dbLocation: 'local', theme: { mode: 'dark', main: '#4d8f5f', alter: '#ff0000' } },
  databaseLastUpdate: 0,
  dispatchPanel: undefined,
};
