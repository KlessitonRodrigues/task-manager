type GlobalState = {
  currentDate: string;
  path: string;
  settings: SettingsDB;
  databaseLastUpdate: number;
  dispatchPanel:
    | { nav: 'calendar'; action: 'edit'; data: CalendarEvent }
    | { nav: 'calendar'; action: 'edit'; data: CalendarEvent };
};
