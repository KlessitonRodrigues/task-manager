import { useState } from 'react';
import PageContainer from 'src/UI/base/PageContainer';

const NotesPage = () => {
  const [open, setopen] = useState(true);

  return (
    <div onClick={() => setopen(!open)}>
      <PageContainer></PageContainer>
    </div>
  );
};

export default NotesPage;
