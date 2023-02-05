import { useState } from 'react';
import PageContainer from 'src/UI/base/PageContainer';
import Calendar from 'src/UI/components/Calendar';
import EventCreatePanel from 'src/UI/components/CreateEventPanel';
import EventEditPanel from 'src/UI/components/EditEventPanel';

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
      <EventCreatePanel show={page.sidePanel === 'createEvent'} onClose={handlers.closePanel} />
      <EventEditPanel
        editEvent={page.editingEvent}
        show={page.sidePanel === 'editEvent'}
        onClose={handlers.closePanel}
      />
    </PageContainer>
  );
};

export default HomePage;
