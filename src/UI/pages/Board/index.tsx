import { useState } from 'react';
import PageConainer from 'src/UI/base/PageContainer/index';
import PageHeader from 'src/UI/components/PageHeader/index';

const BoardPage = () => {
  const [open, setopen] = useState(true);

  return (
    <div onClick={() => setopen(!open)}>
      <PageConainer>
        <PageHeader />
      </PageConainer>
    </div>
  );
};

export default BoardPage;
