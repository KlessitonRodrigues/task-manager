import { useEffect, useMemo, useState } from 'react';
import CalendarHeader from 'src/UI/base/CalendarHeader';

import { getEvents } from './services/getEvents';
import { renderCalendarData } from './services/renderWeeks';
import { Container, Content } from './styled';

export const Calendar = (props: CalendarProps) => {
  const { currentDate } = props;
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [week, setWeek] = useState(0);
  const weeksToRender = useMemo(
    () => renderCalendarData({ events, currentDate, changeWeek: setWeek }),
    [events]
  );

  useEffect(() => {
    getEvents(currentDate).then(setEvents).catch(console.error);
  }, [currentDate]);

  return (
    <Container>
      <CalendarHeader {...props} />
      <Content week={week + 1}>{weeksToRender}</Content>
    </Container>
  );
};

export default Calendar;
