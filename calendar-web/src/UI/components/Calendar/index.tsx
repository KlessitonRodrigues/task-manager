import { useMemo, useState } from 'react';
import CalendarGrid from 'src/UI/base/CalendarGrid';
import CalendarHeader from 'src/UI/base/CalendarHeader';
import { client } from 'src/apiClient';

import { Container } from './styled';

export const Calendar = () => {
  const [expandedWeek, setWeek] = useState(0);
  const [currentDate, setDate] = useState(new Date().toISOString());

  const dates = useMemo(
    () => client.calendar.datesByColumns({ currentDate, columns: 7 }),
    [currentDate]
  );

  return (
    <Container>
      <CalendarHeader currentDate={currentDate} onNext={setDate} onPrev={setDate} />
      <CalendarGrid monthWeeks={dates} expandedWeek={expandedWeek} onChangeWeek={setWeek} />
    </Container>
  );
};

export default Calendar;
