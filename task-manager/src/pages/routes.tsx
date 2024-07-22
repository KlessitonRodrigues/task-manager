import { Route, Routes } from 'react-router-dom';

import CalendarPage from './calendar';

const Router = () => {
  return (
    <Routes location={location}>
      <Route path="/*" element={<CalendarPage />} />
    </Routes>
  );
};

export default Router;
