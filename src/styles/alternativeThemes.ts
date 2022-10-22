import materialColors from './materialColor';

interface DynamicTheme {
  bg1: string;
  bg2: string;
  bg3: string;
  text1: string;
  text2: string;
  text3: string;
  colorA: {
    50: string;
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
  };
  colorB: {
    50: string;
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
  };
  gradient: string;
}

const light = {
  bg1: materialColors.blueGrey['50'],
  bg2: materialColors.blueGrey['100'],
  bg3: materialColors.blueGrey['200'],
  text1: materialColors.blueGrey['500'],
  text2: materialColors.blueGrey['800'],
  text3: materialColors.blueGrey['900'],
};

const dark = {
  bg1: materialColors.blueGrey['900'],
  bg2: materialColors.blueGrey['700'],
  bg3: materialColors.blueGrey['600'],
  text1: materialColors.blueGrey['50'],
  text2: materialColors.blueGrey['200'],
  text3: materialColors.blueGrey['300'],
};

const mainColors: Record<string, DynamicTheme> = {
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
  salmon: {
    ...dark,
    gradient: '#BF364A,#D26071',
    colorA: {
      50: '#fcedea',
      100: '#f09f90',
      300: '#e5563b',
      500: '#c7361b',
      700: '#a42d16',
      900: '#7b2211',
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

export const getCurrentTheme = () => {
  const bodyClasses = document.body.classList;
  const themeOptions = Object.keys(mainColors);
  const selectedTheme = themeOptions.find(theme => bodyClasses.contains(theme));
  return mainColors[selectedTheme || 'blue'];
};
