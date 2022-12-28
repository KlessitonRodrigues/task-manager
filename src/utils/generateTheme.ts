export const generateColorsFromBodyClass = () => {
  const arr = document.body.className
    .split(' ')
    .find(str => str.startsWith('--theme'))
    .split('-');

  const [isDark, colorA, colorB] = [arr[3] === 'dark', arr[4], arr[5]];

  const newColors = {
    main: colorA,
    mainHover: colorA,
    mainBg: colorA,
    alternative: colorB,
    alternativeHover: colorB,
    alternativeBg: colorB,
  };

  if (isDark) {
    newColors.main;
    newColors.mainBg += 'aa';
    newColors.mainHover += '77';
    newColors.alternative;
    newColors.alternativeBg += 'aa';
    newColors.alternativeHover += '77';
  } else {
    newColors.mainHover += 'bb';
    newColors.alternativeHover += 'bb';
  }

  console.log('GENERATE', newColors);

  return {
    isDark,
    colors: newColors,
  };
};
