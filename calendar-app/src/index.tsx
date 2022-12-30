import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from 'src/UI/pages';
import { GlobalProvider } from 'src/hooks/useGlobalContext';
import GlobalCSS from 'src/styles/globalCSS';

const App = () => (
  <GlobalProvider>
    <GlobalCSS />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </GlobalProvider>
);

reactDOM.render(<App />, document.getElementById('root'));
