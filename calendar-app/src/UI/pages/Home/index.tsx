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

  return (
    <PageContainer>
      <Calendar currentDate={page.currentDate} goNextMonth={() => {}} goPrevMonth={() => {}} />
      <EventCreatePanel
        show={page.sidePanel === 'createEvent'}
        onClose={() => setPage({ ...page, sidePanel: '' })}
      />
      <EventEditPanel
        editEvent={page.editingEvent}
        show={page.sidePanel === 'editEvent'}
        onClose={() => setPage({ ...page, sidePanel: '' })}
      />
    </PageContainer>
  );
};

export default HomePage;
