import { getLocalStorage } from '@utils/localStorage';
import { LocalStorage } from 'src/@types/localStorage';

export type GlobalState = {
  currentMonth: Date;
  currentWeek: number;
  AnimationDirection: 'left' | 'right';
  sidePanel: '' | 'settings' | 'tags' | 'task';
  theme: 'cian' | 'cianDark';
  localData: LocalStorage;
};

export const globalState: GlobalState = {
  currentMonth: new Date(),
  currentWeek: 0,
  AnimationDirection: 'right',
  sidePanel: '',
  theme: 'cian',
  localData: getLocalStorage(),
};
