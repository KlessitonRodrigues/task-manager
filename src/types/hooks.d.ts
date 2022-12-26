type GlobalState = {
  location: string;
  currentDate: string; // remove
  selectedWeek: string; // remove
  sidePanel: '' | 'settings' | 'tags' | 'newEvent' | 'editEvent';
  theme: 'cian' | 'cianDark';
  database: 'local' | 'remote';
  databaseLastUpdate: number;
};
