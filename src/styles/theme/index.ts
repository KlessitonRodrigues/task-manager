import { materialColors } from './colors';
import { getCurrentTheme } from './handleTheme';
import screenSizes from './screenSizes';

export default {
  getSize: (n: number, n2?: number) => n * 0.2 + 'rem ' + (n2 ? n2 * 0.2 + 'rem' : ''),
  colors: {
    fromTheme: () => getCurrentTheme(),
    gray: materialColors.grey['600'],
    yellow: materialColors.yellow['600'],
    red: materialColors.red['700'],
    green: materialColors.lightGreen['500'],
    white: materialColors.white,
    black: materialColors.black,
  },
  shadow: {
    '1': '1px 1px 2px 1px #0004',
    '2': '1px 1px 2px 1px #0004A',
    '3': '1px 1px 2px 1px #0005',
    '4': '1px 1px 2px 1px #0006',
  },
  border: {
    type: {
      '1': '1px solid #2222',
      '2': '2px solid #2221',
    },
    radius: {
      '1': '4px',
      '2': '6px',
      '3': '8px',
      '4': '10px',
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
