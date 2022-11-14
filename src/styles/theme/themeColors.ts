import { materialColors } from './colors';

const light = {
  bg1: materialColors.blueGrey['50'],
  bg2: materialColors.blueGrey['100'],
  bg3: materialColors.blueGrey['200'],
  text1: materialColors.grey['800'],
  text2: materialColors.grey['700'],
  text3: materialColors.grey['600'],
};

const dark = {
  bg1: materialColors.grey['900'],
  bg2: materialColors.grey['800'],
  bg3: materialColors.grey['700'],
  text1: materialColors.grey['200'],
  text2: materialColors.grey['200'],
  text3: materialColors.grey['300'],
};

export const themeColors = {
  blue: {
    ...light,
    gradient: '#5BA5D7,#3A94CF',
    colorA: {
      50: '#EFF6FB',
      100: '#DEEDF7',
      300: '#ADD2EB',
      500: '#5BA5D7',
      700: '#3A94CF',
      900: '#246794',
    },
    colorB: {
      50: '#599BC5',
      100: '#357197',
      300: '#1B394B',
      500: '#1B394B',
      700: '#1B394B',
      900: '#1B394B',
    },
  },
  darkBlue: {
    ...dark,
    gradient: '#BF364A,#D26071',
    colorA: {
      50: '#5BA5D7',
      100: '#5BA5D7',
      300: '#5BA5D7',
      500: '#5BA5D7',
      700: '#3A94CF',
      900: '#348cc7',
    },
    colorB: {
      50: '#599BC5',
      100: '#357197',
      300: '#1B394B',
      500: '#1B394B',
      700: '#1B394B',
      900: '#1B394B',
    },
  },
};

export type Themes = keyof typeof themeColors;
