import { useState } from 'react';
import PageConainer from 'src/UI/base/PageContainer';
import Calendar from 'src/UI/components/Calendar';
import EventCreatePanel from 'src/UI/components/EventCreatePanel';
import EventEditPanel from 'src/UI/components/EventEditPanel';
import PageHeader from 'src/UI/components/PageHeader/index';

const HomePage = () => {
  const [open, setopen] = useState(true);

  return (
    <div onClick={() => setopen(!open)}>
      <PageConainer>
        <PageHeader />
        <Calendar />
        <EventCreatePanel />
        <EventEditPanel />
      </PageConainer>
    </div>
  );
};

export default HomePage;
