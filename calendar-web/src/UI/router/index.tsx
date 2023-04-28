import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useGlobalContext from 'src/hooks/useGlobalContext/index';
// import { api } from 'src/services/api/routes';
import GlobalCSS from 'src/styles/globalCSS';
import { darkBackground, defaulTheme } from 'src/styles/theme';
import { generateTheme } from 'src/utils/theme';
import { ThemeProvider } from 'styled-components';

import { pages } from '../pages';

const Router = () => {
  const [global, setGlobal] = useGlobalContext();
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

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Routes location={global.path}>
        <Route path="/board" element={<pages.Board />} />
        <Route path="/notes" element={<pages.Notes />} />
        <Route path="/" element={<pages.Home />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
