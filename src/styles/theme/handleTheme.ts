import { Themes, themeColors } from './themeColors';

const themeOptions = Object.keys(themeColors);

export const getCurrentTheme = () => {
  const bodyClasses = document.body.classList;
  const selectedTheme = themeOptions.find(theme =>
    bodyClasses.contains(`--theme-${theme}`)
  ) as Themes;
  return themeColors[selectedTheme || 'blue'];
};

export const setCurrentTheme = (theme: Themes) => {
  const bodyClasses = document.body.classList;
  bodyClasses.forEach(className => {
    if (!className.startsWith('--theme-')) return;
    className = `--theme-${theme}`;
  });
};
