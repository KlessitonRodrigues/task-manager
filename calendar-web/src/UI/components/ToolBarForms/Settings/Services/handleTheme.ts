export const handleTheme = (global: GlobalState, setGlobal: (global: GlobalState) => void) => {
  const updateTheme = async (newTheme: Partial<Theme>) => {
    const settings = global.settings;
    const newSettings = { ...settings, theme: { ...settings.theme, ...newTheme } };
    // await api.settings.updateSettings({ data: newSettings });
    setGlobal({ ...global, settings: newSettings });
  };

  return {
    setMode: (mode: Theme) => updateTheme({}),
    setMain: (main: string) => updateTheme({}),
    setAlter: (alter: string) => updateTheme({}),
  };
};
