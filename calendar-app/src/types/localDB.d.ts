type DBOption = 'local' | 'remote';

type LocalDB = {
  lastUpdate: number;
  events: CalendarEvent[];
};
