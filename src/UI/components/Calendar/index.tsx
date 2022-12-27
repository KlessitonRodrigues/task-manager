import { useEffect, useState } from 'react';
import CalendarContainer from 'src/UI/base/CalendarContainer';
import CalendarHeader from 'src/UI/base/CalendarHeader';

import * as actions from './actions';

export const Calendar = (props: CalendarProps) => {
  const { page } = props;
  const [pageState] = page;
  const [calendarData, setCalendatData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await actions.RenderCalendarData(page);
      setCalendatData(data);
    };
    fetch().catch(err => console.log(err));
  }, [pageState.currentDate]);

  return (
    <CalendarContainer>
      <CalendarHeader page={page} />
      {calendarData}
    </CalendarContainer>
  );
};

export default Calendar;
