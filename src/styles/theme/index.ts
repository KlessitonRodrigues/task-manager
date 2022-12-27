import { getCurrentTheme } from './lib/handleTheme';
import { materialColors } from './lib/palettes';
import screenSizes from './lib/screenSizes';

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
    '0': 'none',
    '1': '1px 1px 4px 0px #0006',
    '2': '1px 1px 4px 0px #0007',
    '3': '1px 1px 4px 0px #0009',
    '4': '1px 1px 4px 0px #000B',
  },
  border: {
    type: {
      '0': 'none',
      '1': '1px solid #2222',
      '2': '2px solid #2221',
    },
    radius: {
      verySmall: '0.2rem',
      small: '0.4rem',
      medium: '0.6rem',
      large: '0.8rem',
      '1': '0.2rem',
      '2': '0.4rem',
      '3': '0.6rem',
      '4': '0.8rem',
    },
  },
  fontSize: {
    body: '1rem',
    h1: '1.6rem',
    h2: '1.4rem',
    h3: '1.2rem',
    h4: '1.1rem',
    h5: '0.9rem',
    h6: '0.8rem',
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
