export const initialGlobalState: GlobalState = {
  path: '/',
  currentDate: new Date().toISOString(),
  settings: { dbLocation: 'local', theme: { mode: 'dark', main: '#3260a8', alter: '#ff0000' } },
  databaseLastUpdate: 0,
  dispatchPanel: undefined,
};
