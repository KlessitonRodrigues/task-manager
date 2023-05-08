import { useMemo, useState } from 'react';
import CalendarGrid from 'src/UI/base/CalendarGrid';
import CalendarHeader from 'src/UI/base/CalendarHeader';

import { getContent } from './services/getContent';
import { Container } from './styled';

export const Calendar = () => {
  const [expandedWeek, setWeek] = useState(0);
  const [currentDate, setDate] = useState(new Date().toISOString());
  const dates = useMemo(() => getContent(currentDate), [currentDate]);

  return (
    <Container>
      <CalendarHeader currentDate={currentDate} onNext={setDate} onPrev={setDate} />
      <CalendarGrid dates={dates} week={expandedWeek} onChangeWeek={setWeek} />
    </Container>
  );
};

export default Calendar;
