import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useGlobalContext from 'src/hooks/useGlobalContext/index';
import GlobalCSS from 'src/styles/globalCSS';
import { darkBackground, defaulTheme } from 'src/styles/theme';
import { generateTheme } from 'src/utils/theme';
import { ThemeProvider } from 'styled-components';

import BoardPage from './Board';
import HomePage from './Home';
import NotesPage from './Notes';

const Router = () => {
  const [global] = useGlobalContext();
  const [theme, setTheme] = useState(defaulTheme);

  useEffect(() => {
    const { settings } = global;
    const colors: Theme['colors'] = {
      ...theme.colors,
      // @ts-ignore
      current: {
        ...(settings.theme.mode == 'dark' ? darkBackground : defaulTheme.colors.current),
        ...generateTheme(global.settings.theme),
      },
    };

    setTheme({ ...theme, colors });
  }, [global.settings.theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Routes location={global.path}>
        <Route path="/board" element={<BoardPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
