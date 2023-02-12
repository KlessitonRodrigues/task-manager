type DBOption = 'local' | 'remote';

type LocalDB = {
  lastUpdate: string;
  events: CalendarEvent[];
};
