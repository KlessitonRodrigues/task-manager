type GlobalState = {
  location: string;
  currentDate: string; // remove
  sidePanel: '' | 'settings' | 'tags' | 'newEvent' | 'editEvent';
  themeColors: { mode: 'dark' | 'light'; main: string; alter: string };
  database: 'local' | 'remote';
  databaseLastUpdate: number;
};
