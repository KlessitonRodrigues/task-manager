import { useState } from 'react';
import PageConainer from 'src/UI/base/PageContainer/index';
import Calendar from 'src/UI/components/Calendar/index';
import PageHeader from 'src/UI/components/PageHeader/index';
import TaskSidePanel from 'src/UI/components/TaskSidePanel/index';

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
