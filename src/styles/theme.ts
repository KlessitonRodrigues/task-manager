import { getCurrentTheme } from './alternativeThemes';
import materialColors from './materialColor';
import screenSizes from './screenSizes';

export default {
  getSize: (n: number) => n * 0.2 + 'rem',
  colors: {
    dynamic: () => getCurrentTheme(),
    gray: materialColors.grey['600'],
    yellow: materialColors.yellow['600'],
    red: materialColors.red['700'],
    green: materialColors.lightGreen['500'],
    white: materialColors.white,
    black: materialColors.black,
  },
  shadow: {
    '1': '1px 1px 2px 1px #0004',
    '2': '1px 1px 2px 1px #0004',
    '3': '1px 1px 3px 1px #0006',
    '4': '1px 1px 3px 1px #0009',
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
