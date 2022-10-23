import PageConainer from '@UI/base/PageContainer/index';
import Calendar from '@UI/components/Calendar/index';
import PageHeader from '@UI/components/PageHeader/index';
import TaskSidePanel from '@UI/components/TaskSidePanel/index';
import { useState } from 'react';

const HomePage = () => {
  const [open, setopen] = useState(true);

  return (
    <div onClick={() => setopen(!open)}>
      <PageConainer>
        <PageHeader />
        <Calendar />
        <TaskSidePanel />
      </PageConainer>
    </div>
  );
};

export default HomePage;
