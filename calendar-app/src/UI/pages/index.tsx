import { Route, Routes } from 'react-router-dom';
import useGlobalContext from 'src/hooks/useGlobalContext/index';

import PageHeader from '../components/PageHeader';
import SettingsPanel from '../components/SettingsPanel';
import BoardPage from './Board';
import HomePage from './Home';
import NotesPage from './Notes';

const Router = () => {
  const [global] = useGlobalContext();
  return (
    <>
      <PageHeader />
      <Routes location={global.location}>
        <Route path="/board" element={<BoardPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <SettingsPanel />
    </>
  );
};

export default Router;
