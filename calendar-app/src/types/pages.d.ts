type CalendarPageState = {
  sidePanel: '' | 'createEvent' | 'editEvent';
  currentDate: string;
  selectedWeek: number;
  editingEvent?: CalendarEvent;
};

type CalendarPageStateHook = [CalendarPageState, (state: CalendarPageState) => void];
