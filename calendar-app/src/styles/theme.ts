import { materialColors } from './lib/palettes';
import screenSizes from './lib/screenSizes';

export const darkBackground: Partial<Theme['colors']['current']> = {
  bg1: materialColors.black,
  bg2: materialColors.grey['800'] + '44',
  bg3: materialColors.grey['700'] + '44',
  text1: materialColors.grey['400'],
  text2: materialColors.grey['500'],
  text3: materialColors.grey['600'],
};

export const defaulTheme: Theme = {
  size: (n: number) => `${n * 0.2}rem`,
  colors: {
    current: {
      bg1: materialColors.blueGrey['50'],
      bg2: materialColors.blueGrey['100'] + '44',
      bg3: materialColors.blueGrey['200'] + '44',
      text1: materialColors.grey['800'],
      text2: materialColors.grey['700'],
      text3: materialColors.grey['600'],
      main: '#444444',
      mainHover: '#444444',
      mainBg: '#444444',
      alternative: '#444444',
      alternativeHover: '#444444',
      alternativeBg: '#444444',
    },
    gray: materialColors.grey['600'],
    yellow: materialColors.yellow['600'],
    red: materialColors.red['700'],
    green: materialColors.lightGreen['500'],
    white: materialColors.white,
    black: materialColors.black,
  },
  shadow: {
    low: '1px 1px 4px 0px #0004',
    medium: '1px 1px 4px 1px #0005',
    high: '1px 1px 4px 1px #0007',
    mediumGray: '1px 1px 4px 1px #777a',
    lowRight: '3px 0 4px 0px #0002',
  },
  border: {
    type: {
      small: 'none',
      medium: '1px solid #2222',
      large: '2px solid #2221',
    },
    radius: {
      verySmall: '0.3rem',
      small: '0.4rem',
      medium: '0.6rem',
      large: '0.8rem',
      full: '50%',
    },
  },
  fontSize: {
    body: '1rem',
    small: '0.95rem',
    verySmall: '0.9rem',
    label: '0.85rem',
    h1: '1.6rem',
    h2: '1.4rem',
    h3: '1.2rem',
    h4: '1.1rem',
    h5: '1.075rem',
    h6: '1.05rem',
  },
  devices: {
    mobileS: `(max-width: ${screenSizes.mobileS})`,
    mobileM: `(max-width: ${screenSizes.mobileM})`,
    mobileL: `(max-width: ${screenSizes.mobileL})`,
    tablet: `(max-width: ${screenSizes.tablet})`,
    laptop: `(max-width: ${screenSizes.laptopM})`,
    laptopL: `(max-width: ${screenSizes.laptopL})`,
    desktop: `(max-width: ${screenSizes.desktopM})`,
    desktopL: `(max-width: ${screenSizes.desktopL})`,
  },
};
