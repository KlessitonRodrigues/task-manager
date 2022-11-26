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
      500: atlassianColors.blue['600'],
      600: atlassianColors.blue['700'],
      700: atlassianColors.blue['800'],
    },
    colorB: {
      500: '',
      600: '',
      700: '',
    },
    gradient: `${atlassianColors.blue['600']},${atlassianColors.blue['800']}`,
  },
  darkBlue: {
    ...dark,
    colorA: {
      500: atlassianColors.blue['900'],
      600: atlassianColors.blue['600'],
      700: atlassianColors.blue['300'],
    },
    colorB: {
      500: '',
      600: '',
      700: '',
    },
    gradient: `${atlassianColors.blue['600']},${atlassianColors.blue['800']}`,
  },
  purple: {
    ...light,
    colorA: {
      500: atlassianColors.purple['600'],
      600: atlassianColors.purple['700'],
      700: atlassianColors.purple['800'],
    },
    colorB: {
      500: '',
      600: '',
      700: '',
    },
    gradient: `${atlassianColors.purple['600']},${atlassianColors.purple['800']}`,
  },
  darkPurple: {
    ...dark,
    colorA: {
      500: atlassianColors.purple['900'],
      600: atlassianColors.purple['600'],
      700: atlassianColors.purple['400'],
    },
    colorB: {
      500: '',
      600: '',
      700: '',
    },
    gradient: `${atlassianColors.purple['600']},${atlassianColors.purple['800']}`,
  },
  teal: {
    ...light,
    colorA: {
      500: atlassianColors.teal['700'],
      600: atlassianColors.teal['800'],
      700: atlassianColors.teal['900'],
    },
    colorB: {
      500: '',
      600: '',
      700: '',
    },
    gradient: `${atlassianColors.teal['600']},${atlassianColors.teal['800']}`,
  },
  darkTeal: {
    ...dark,
    colorA: {
      500: atlassianColors.teal['800'],
      600: atlassianColors.teal['600'],
      700: atlassianColors.teal['300'],
    },
    colorB: {
      500: '',
      600: '',
      700: '',
    },
    gradient: `${atlassianColors.teal['600']},${atlassianColors.teal['800']}`,
  },
};

export type Themes = keyof typeof themeColors;
