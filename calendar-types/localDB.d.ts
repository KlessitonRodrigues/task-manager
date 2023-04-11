type SettingsDB = {
  dbLocation: 'local' | 'api';
  theme: { mode: 'dark' | 'light'; main: string; alter: string };
};

type LocalDB = {
  lastUpdate: string;
  settings: SettingsDB;
  events: CalendarEvent[];
};
