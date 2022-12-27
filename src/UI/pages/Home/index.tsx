import { useState } from 'react';
import PageConainer from 'src/UI/base/PageContainer';
import Calendar from 'src/UI/components/Calendar';
import EventCreatePanel from 'src/UI/components/CreateEventPanel';
import EventEditPanel from 'src/UI/components/EditEventPanel';
import PageHeader from 'src/UI/components/PageHeader/index';

const initialState: CalendarPageState = {
  sidePanel: '',
  selectedWeek: 0,
  currentDate: new Date().toLocaleString(),
};

const HomePage = () => {
  const page = useState(initialState);
  const [pageState, setPageState] = page;

  return (
    <PageConainer>
      <PageHeader />
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
    </PageConainer>
  );
};

export default HomePage;
