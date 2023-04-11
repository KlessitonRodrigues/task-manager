import { useEffect, useMemo, useState } from 'react';
import CalendarHeader from 'src/UI/base/CalendarHeader';
import { api } from 'src/services/api/routes';

import { renderCalendarData } from './services/renderWeeks';
import { Container, Content } from './styled';

export const Calendar = () => {
  const [expandedWeek, setWeek] = useState(0);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const currentDateState = useState(new Date().toString());
  const [currentDate] = currentDateState;

  const weeksToRender = useMemo(
    () =>
      renderCalendarData({
        events,
        currentDate: currentDate,
        onExpandWeek: setWeek,
      }),
    [events]
  );

  useEffect(() => {
    api.events.fetchEvents().then(setEvents).catch(console.error);
  }, [currentDate]);

  return (
    <Container>
      <CalendarHeader currentDateState={currentDateState} />
      <Content week={expandedWeek + 1}>{weeksToRender}</Content>
    </Container>
  );
};

export default Calendar;
