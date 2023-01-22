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
  const page = useState(initialState);
  const [pageState, setPageState] = page;

  return (
    <PageContainer>
      <Calendar page={page} />
      <EventCreatePanel
        show={pageState.sidePanel === 'createEvent'}
        onClose={() => setPageState({ ...pageState, sidePanel: '' })}
      />
      <EventEditPanel
        editEvent={pageState.editingEvent}
        show={pageState.sidePanel === 'editEvent'}
        onClose={() => setPageState({ ...pageState, sidePanel: '' })}
      />
    </PageContainer>
  );
};

export default HomePage;
