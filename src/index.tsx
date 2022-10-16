import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from '@hooks/useGlobalContext';
import Router from '@UI/pages';
import GlobalCSS from '@styles/globalCSS';

const App = () => (
  <GlobalProvider>
    <GlobalCSS />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </GlobalProvider>
);

reactDOM.render(<App />, document.getElementById('root'));
