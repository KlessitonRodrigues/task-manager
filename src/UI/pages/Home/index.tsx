import { useState } from 'react';
import PageConainer from 'src/UI/base/PageContainer';
import Calendar from 'src/UI/components/Calendar';
import EventCreatePanel from 'src/UI/components/CreateEventPanel';
import EventEditPanel from 'src/UI/components/EditEventPanel';
import PageHeader from 'src/UI/components/PageHeader/index';

const HomePage = () => {
  const [pageState, setPageState] = useState<CalendarPageState>({
    sidePanel: '',
    selectedWeek: 0,
    currentDate: new Date().toLocaleString(),
  });

  return (
    <PageConainer>
      <PageHeader />
      <Calendar pageState={pageState} setPageState={setPageState} />
      <EventCreatePanel
        show={pageState.sidePanel === 'createEvent'}
        onClose={() => setPageState({ ...pageState, sidePanel: '' })}
      />
      <EventEditPanel
        show={pageState.sidePanel === 'editEvent'}
        onClose={() => setPageState({ ...pageState, sidePanel: '' })}
      />
    </PageConainer>
  );
};

export default HomePage;
