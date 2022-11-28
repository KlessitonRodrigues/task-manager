import { materialColors, atlassianColors } from './lib/palettes';

const light = {
  bg1: materialColors.blueGrey['50'],
  bg2: materialColors.blueGrey['100'] + '44',
  bg3: materialColors.blueGrey['200'] + '44',
  text1: materialColors.grey['800'],
  text2: materialColors.grey['700'],
  text3: materialColors.grey['600'],
};

const dark = {
  bg1: materialColors.black,
  bg2: materialColors.grey['800'] + '44',
  bg3: materialColors.grey['700'] + '44',
  text1: materialColors.grey['400'],
  text2: materialColors.grey['500'],
  text3: materialColors.grey['600'],
};

export const themeColors = {
  blue: {
    ...light,
    colorA: {
      normal: atlassianColors.blue['600'],
      variant: atlassianColors.blue['700'],
      highlight: atlassianColors.blue['800'],
    },
  },
  darkBlue: {
    ...dark,
    colorA: {
      normal: atlassianColors.blue['900'],
      variant: atlassianColors.blue['700'],
      highlight: atlassianColors.blue['300'],
    },
  },
  purple: {
    ...light,
    colorA: {
      normal: atlassianColors.purple['700'],
      variant: atlassianColors.purple['500'],
      highlight: atlassianColors.purple['800'],
    },
  },
  darkPurple: {
    ...dark,
    colorA: {
      normal: atlassianColors.purple['900'],
      variant: atlassianColors.purple['700'],
      highlight: atlassianColors.purple['400'],
    },
  },
};

export type Themes = keyof typeof themeColors;
