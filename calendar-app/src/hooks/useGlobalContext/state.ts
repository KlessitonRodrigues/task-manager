export const globalState: GlobalState = {
  path: '/',
  currentDate: new Date().toISOString(),
  settings: { dbLocation: 'local', theme: { mode: 'light', main: '#402a87', alter: '#ff0000' } },
  databaseLastUpdate: 0,
  dispatchPanel: undefined,
};
