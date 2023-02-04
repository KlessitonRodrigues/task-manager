import { useEffect, useState } from 'react';
import CalendarHeader from 'src/UI/base/CalendarHeader';

import * as actions from './actions';
import { Container, Content } from './styled';

export const Calendar = (props: CalendarProps) => {
  const { page } = props;
  const [pageState] = page;
  const [calendarData, setCalendatData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await actions.RenderCalendarData(page);
      setCalendatData(data);
    };
    fetch().catch(console.error);
  }, [pageState.currentDate]);

  return (
    <Container>
      <CalendarHeader page={page} />
      <Content>{calendarData}</Content>
    </Container>
  );
};

export default Calendar;
