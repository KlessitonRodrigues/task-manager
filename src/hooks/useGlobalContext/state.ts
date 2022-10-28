import { getLocalStorage } from '@utils/localStorage';
import { LocalStorage } from 'src/@types/localStorage';

export type GlobalState = {
  currentDate: string;
  AnimationDirection: 'left' | 'right';
  sidePanel: '' | 'settings' | 'tags' | 'task';
  theme: 'cian' | 'cianDark';
  localData: LocalStorage;
};

export const globalState: GlobalState = {
  currentDate: new Date().toISOString(),
  AnimationDirection: 'right',
  sidePanel: '',
  theme: 'cian',
  localData: getLocalStorage(),
};
