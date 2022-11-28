import { Routes, Route } from 'react-router-dom';

import HomePage from './Home';
import NotesPage from './Notes';
import BoardPage from './Board';
import useGlobalContext from 'src/hooks/useGlobalContext/index';

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
