type CalendarPageState = {
  sidePanel: '' | 'createEvent' | 'editEvent';
  currentDate: string;
  selectedWeek: number;
  editingEvent?: JoinEventAndDate;
};

type CalendarPageStateHook = [CalendarPageState, (state: CalendarPageState) => void];
