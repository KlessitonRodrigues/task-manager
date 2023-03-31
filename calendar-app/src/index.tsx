import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from 'src/UI/pages/routes';
import { GlobalProvider } from 'src/hooks/useGlobalContext';

const App = () => (
  <GlobalProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </GlobalProvider>
);

reactDOM.render(<App />, document.getElementById('root'));
