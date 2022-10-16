import materialColors from './materialColor';
import screenSizes from './screenSizes';

export default {
  getSize: (n: number) => n * 0.2 + 'rem',
  colors: {
    colorA: {
      50: '#EFF6FB',
      100: '#DEEDF7',
      300: '#ADD2EB',
      500: '#5BA5D7',
      700: '#3A94CF',
      900: '#246794',
    },
    colorB: {
      100: '#599BC5',
      200: '#357197',
      300: '#1B394B',
      400: '#1B394B',
      500: '#1B394B',
    },
    gray: materialColors.grey['600'],
    yellow: materialColors.yellow['600'],
    red: materialColors.red['700'],
    green: materialColors.green['600'],
    white: materialColors.white,
    black: materialColors.black,
    bg: {
      dark: materialColors.grey['800'],
      light: materialColors.grey['50'],
    },
    text: {
      dark: materialColors.grey['800'],
      light: materialColors.grey['200'],
    },
  },
  shadow: {
    '1': '1px 1px 4px #2221',
  },
  border: {
    type: {
      '1': '1px solid #2222',
    },
    radius: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
    },
  },
  fontSize: {
    h1: '1.6rem',
    h2: '1.4rem',
    h3: '1.2rem',
    h4: '1rem',
    h5: '0.9rem',
    h6: '0.8rem',
    body: '1rem',
  },
  devices: {
    mobileS: `(max-width: ${screenSizes.mobileS})`,
    mobileM: `(max-width: ${screenSizes.mobileM})`,
    mobileL: `(max-width: ${screenSizes.mobileL})`,
    tablet: `(max-width: ${screenSizes.tablet})`,
    laptop: `(max-width: ${screenSizes.laptop})`,
    laptopL: `(max-width: ${screenSizes.laptopL})`,
    desktop: `(max-width: ${screenSizes.desktop})`,
    desktopL: `(max-width: ${screenSizes.desktop})`,
  },
};
