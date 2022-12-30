export const generateColorsFromBodyClass = () => {
  const arr = document.body.className
    .split(' ')
    .find(str => str.startsWith('--theme'))
    .split('-');

  const [isDark, colorA, colorB] = [arr[3] === 'dark', arr[4], arr[5]];

  const colors = {
    main: colorA,
    mainHover: colorA,
    mainBg: colorA,
    alternative: colorB,
    alternativeHover: colorB,
    alternativeBg: colorB,
  };

  if (isDark) {
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

  console.log('GENERATE', colors);

  return {
    isDark,
    colors,
  };
};
