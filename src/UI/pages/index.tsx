import { Route, Routes } from 'react-router-dom';
import useGlobalContext from 'src/hooks/useGlobalContext/index';

import BoardPage from './Board';
import HomePage from './Home';
import NotesPage from './Notes';

const Router = () => {
  const [global] = useGlobalContext();
  return (
    <Routes location={global.location}>
      <Route path="/board" element={<BoardPage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
