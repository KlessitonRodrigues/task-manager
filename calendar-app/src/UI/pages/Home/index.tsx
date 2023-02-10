import { useState } from 'react';
import PageContainer from 'src/UI/base/PageContainer';
import Calendar from 'src/UI/components/Calendar';

const initialState: CalendarPageState = {
  sidePanel: '',
  selectedWeek: 0,
  currentDate: new Date().toLocaleString(),
};

const HomePage = () => {
  const [page, setPage] = useState(initialState);

  const handlers = {
    changeMonth: (currentDate: string) => setPage({ ...page, currentDate }),
    closePanel: () => setPage({ ...page, sidePanel: '' }),
  };

  return (
    <PageContainer>
      <Calendar currentDate={page.currentDate} changeMonth={handlers.changeMonth} />
    </PageContainer>
  );
};

export default HomePage;
