import { useState } from 'react';
import PageConainer from 'src/UI/base/PageContainer/index';

const NotesPage = () => {
  const [open, setopen] = useState(true);

  return (
    <div onClick={() => setopen(!open)}>
      <PageConainer></PageConainer>
    </div>
  );
};

export default NotesPage;
