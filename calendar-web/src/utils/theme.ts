const changeColor = (hex: string, factor: number = 80) => {
  const lightColor = hex
    .split(/(\w{2})/)
    .filter(v => v.length === 2)
    .map(v => {
      const lightColor = parseInt(v, 16) + factor;
      if (lightColor > 255) return 'ff';
      return lightColor.toString(16);
    })
    .join('');
  return `#${lightColor}`;
};

export const generateTheme = (settings: any) => {
  const { mode, main } = settings;
  const colors = {
    main: main,
    mainHover: main,
    mainBg: main,
  };

  if (mode === 'dark') {
    colors.main = changeColor(colors.main);
    colors.mainBg += 'aa';
    colors.mainHover += '77';
  } else {
    colors.mainHover += 'bb';
  }

  return colors;
};
