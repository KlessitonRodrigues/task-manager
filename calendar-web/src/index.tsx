import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from 'src/UI/router';
import { ActionProvider } from 'src/hooks/useActionDispatch';
import { GlobalProvider } from 'src/hooks/useGlobalContext';

const App = () => (
  <GlobalProvider>
    <ActionProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ActionProvider>
  </GlobalProvider>
);

reactDOM.render(<App />, document.getElementById('root'));
