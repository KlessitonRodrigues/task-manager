export type GlobalState = {
  currentMonth: Date;
  currentWeek: number;
  AnimationDirection: 'left' | 'right';
  sidePanel: '' | 'settings' | 'tags' | 'task';
  theme: 'cian' | 'cianDark';
};

export const globalState: GlobalState = {
  currentMonth: new Date(),
  currentWeek: 0,
  AnimationDirection: 'right',
  sidePanel: '',
  theme: 'cian',
};
