import { useMemo, useState } from 'react';
import CalendarGrid from 'src/UI/base/CalendarGrid';
import CalendarHeader from 'src/UI/base/CalendarHeader';

import { getCalendarData } from './services/getCalendarData';
import { Container } from './styled';

export const Calendar = () => {
  const [expandedWeek, setWeek] = useState(0);
  const [currentDate, setDate] = useState(new Date().toISOString());

  const calendarData = useMemo(() => getCalendarData({ currentDate, columns: 7 }), [currentDate]);

  return (
    <Container>
      <CalendarHeader currentDate={currentDate} onNext={setDate} onPrev={setDate} />
      <CalendarGrid
        dateNow={calendarData.dateNow}
        monthWeeks={calendarData.monthWeeks}
        eventsByWeek={calendarData.eventsByWeek}
        expandedWeek={expandedWeek}
        onChangeWeek={setWeek}
      />
    </Container>
  );
};

export default Calendar;
