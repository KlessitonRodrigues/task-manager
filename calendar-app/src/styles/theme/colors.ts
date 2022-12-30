import { generateColorsFromBodyClass } from 'src/utils/generateTheme';

import { atlassianColors, materialColors } from './lib/palettes';

const defaultTheme = {
  light: {
    bg1: materialColors.blueGrey['50'],
    bg2: materialColors.blueGrey['100'] + '44',
    bg3: materialColors.blueGrey['200'] + '44',
    text1: materialColors.grey['800'],
    text2: materialColors.grey['700'],
    text3: materialColors.grey['600'],
  },
  dark: {
    bg1: materialColors.black,
    bg2: materialColors.grey['800'] + '44',
    bg3: materialColors.grey['700'] + '44',
    text1: materialColors.grey['400'],
    text2: materialColors.grey['500'],
    text3: materialColors.grey['600'],
  },
  colors: {
    main: atlassianColors.blue['500'],
    mainHover: atlassianColors.blue['500'],
    mainBg: atlassianColors.blue['800'],
    alternative: atlassianColors.red['500'],
    alternativeHover: atlassianColors.blue['500'],
    alternativeBg: atlassianColors.red['500'],
  },
};

const theme = { bodyClass: '', content: defaultTheme.light, colors: defaultTheme.colors };

export const getCurrentColors = () => {
  if (theme.bodyClass !== document.body.className) {
    const newTheme = generateColorsFromBodyClass();

    theme.content = newTheme.isDark ? defaultTheme.dark : defaultTheme.light;
    theme.colors = newTheme.colors;
    theme.bodyClass = document.body.className;
  }

  return {
    ...theme.content,
    ...theme.colors,
  };
};
