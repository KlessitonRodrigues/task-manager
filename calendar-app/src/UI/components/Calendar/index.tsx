import { useEffect, useState } from 'react';
import CalendarHeader from 'src/UI/base/CalendarHeader';

import { RenderCalendarData } from './services/renderWeeks';
import { Container, Content } from './styled';

export const Calendar = (props: CalendarProps) => {
  const { currentDate } = props;
  const [calendarData, setCalendatData] = useState([]);

  useEffect(() => {
    RenderCalendarData(currentDate).then(setCalendatData).catch(console.error);
  }, [currentDate]);

  return (
    <Container>
      <CalendarHeader {...props} />
      <Content>{calendarData}</Content>
    </Container>
  );
};

export default Calendar;
