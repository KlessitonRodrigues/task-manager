import { useState } from 'react';
import PageContainer from 'src/UI/components/PageContainer';

const BoardPage = () => {
  const [open, setopen] = useState(true);

  return (
    <div onClick={() => setopen(!open)}>
      <PageContainer></PageContainer>
    </div>
  );
};

export default BoardPage;
