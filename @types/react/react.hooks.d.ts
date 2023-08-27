type GlobalState = {
  path: string;
  settings: SettingsDB;
};

type GlobalContext = [GlobalState, React.Dispatch<React.SetStateAction<GlobalState>>];

type ActionState = {
  action:
    | { to: ''; type: ''; data: null }
    | { to: 'EDIT_PANEL'; type: 'EDIT'; data: CalendarEvent }
    | { to: 'EDIT_PANEL'; type: 'EDIT'; data: CalendarEvent };
};

type ActionsContext = [ActionState, React.Dispatch<React.SetStateAction<ActionState>>];
