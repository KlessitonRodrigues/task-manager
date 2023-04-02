import { api } from 'src/services/api/routes';

const updateTheme = (theme: Partial<SettingsDB['theme']>) => {
  return {};
};

export const theme = {
  setMode: (mode: SettingsDB['theme']['mode']) => updateTheme({ mode }),
  setMain: (main: string) => updateTheme({ main }),
  setAlt: (alter: string) => updateTheme({ alter }),
};
