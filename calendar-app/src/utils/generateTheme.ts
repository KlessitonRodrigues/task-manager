export const generateTheme = (settings: GlobalState['themeColors']) => {
  const { mode, main, alter } = settings;
  const colors = {
    main: main,
    mainHover: main,
    mainBg: main,
    alternative: alter,
    alternativeHover: alter,
    alternativeBg: alter,
  };

  if (mode === 'dark') {
    colors.main;
    colors.mainBg += 'aa';
    colors.mainHover += '77';
    colors.alternative;
    colors.alternativeBg += 'aa';
    colors.alternativeHover += '77';
  } else {
    colors.mainHover += 'bb';
    colors.alternativeHover += 'bb';
  }

  return colors;
};
