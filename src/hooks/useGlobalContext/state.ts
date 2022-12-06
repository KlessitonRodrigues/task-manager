export type GlobalState = {
  location: string;
  currentDate: string;
  selectedWeek: string;
  AnimationDirection: 'left' | 'right';
  sidePanel: '' | 'settings' | 'tags' | 'task';
  theme: 'cian' | 'cianDark';
};

export const globalState: GlobalState = {
  location: '/',
  currentDate: new Date().toISOString(),
  selectedWeek: 'week1',
  AnimationDirection: 'right',
  sidePanel: '',
  theme: 'cian',
};
