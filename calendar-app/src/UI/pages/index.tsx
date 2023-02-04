import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useGlobalContext from 'src/hooks/useGlobalContext/index';
import GlobalCSS from 'src/styles/globalCSS';
import { darkBackground, defaulTheme } from 'src/styles/theme';
import { generateTheme } from 'src/utils/generateTheme';
import { ThemeProvider } from 'styled-components';

import PageHeader from '../components/PageHeader';
import SettingsPanel from '../components/SettingsPanel';
import BoardPage from './Board';
import HomePage from './Home';
import NotesPage from './Notes';

const Router = () => {
  const [global] = useGlobalContext();
  const [theme, setTheme] = useState(defaulTheme);

  useEffect(() => {
    const colors: Theme['colors'] = {
      ...theme.colors,
      // @ts-ignore
      current: {
        ...(global.themeColors.mode == 'dark' ? darkBackground : defaulTheme.colors.current),
        ...generateTheme(global.themeColors),
      },
    };

    setTheme({ ...theme, colors });
  }, [global.themeColors.mode, global.themeColors.main, global.themeColors.alter]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Routes location={global.location}>
        <Route path="/board" element={<BoardPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <SettingsPanel />
    </ThemeProvider>
  );
};

export default Router;
