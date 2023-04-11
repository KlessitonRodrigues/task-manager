import { api } from 'src/services/api/routes';

export const handleTheme = (global: GlobalState, setGlobal: (global: GlobalState) => void) => {
  const updateTheme = async (newTheme: Partial<SettingsDB['theme']>) => {
    const settings = global.settings;
    const newSettings = { ...settings, theme: { ...settings.theme, ...newTheme } };
    await api.settings.updateSettings({ data: newSettings });
    setGlobal({ ...global, settings: newSettings });
  };

  return {
    setMode: (mode: SettingsDB['theme']['mode']) => updateTheme({ mode }),
    setMain: (main: string) => updateTheme({ main }),
    setAlter: (alter: string) => updateTheme({ alter }),
  };
};
