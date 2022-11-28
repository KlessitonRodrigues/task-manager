import { getLocalStorage } from 'src/utils/localStorage';
import { LocalStorage } from 'src/types/localStorage';

export type GlobalState = {
  location: string;
  currentDate: string;
  selectedWeek: string;
  AnimationDirection: 'left' | 'right';
  sidePanel: '' | 'settings' | 'tags' | 'task';
  theme: 'cian' | 'cianDark';
  localData: LocalStorage;
};

export const globalState: GlobalState = {
  location: '/',
  currentDate: new Date().toISOString(),
  selectedWeek: 'week1',
  AnimationDirection: 'right',
  sidePanel: '',
  theme: 'cian',
  localData: getLocalStorage(),
};
