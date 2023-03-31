import { useEffect, useMemo, useState } from 'react';
import CalendarHeader from 'src/UI/base/CalendarHeader';
import useGlobalContext from 'src/hooks/useGlobalContext';

import { getEvents } from './services/getEvents';
import { renderCalendarData } from './services/renderWeeks';
import { Container, Content } from './styled';

export const Calendar = () => {
  const [global] = useGlobalContext();
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [expandedWeek, setWeek] = useState(0);
  const renderProps: RenderCalendarDataProps = {
    events,
    currentDate: global.currentDate,
    onExpandWeek: setWeek,
  };
  const weeksToRender = useMemo(() => renderCalendarData(renderProps), [events]);

  useEffect(() => {
    getEvents().then(setEvents).catch(console.error);
  }, [global.currentDate]);

  return (
    <Container>
      <CalendarHeader />
      <Content week={expandedWeek + 1}>{weeksToRender}</Content>
    </Container>
  );
};

export default Calendar;
