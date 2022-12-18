import { useEffect, useState } from 'react';
import CalendarContainer from 'src/UI/base/CalendarContainer';
import CalendarHeader from 'src/UI/base/CalendarHeader';
import useGlobalContext from 'src/hooks/useGlobalContext';

import * as actions from './actions';

export const Calendar = () => {
  const [global] = useGlobalContext();
  const [calendarData, setCalendatData] = useState([]);

  useEffect(() => {
    actions.RenderCalendarData(global.currentDate).then(data => setCalendatData(data));
  }, []);

  return (
    <CalendarContainer>
      <>
        <CalendarHeader />
        {calendarData}
      </>
    </CalendarContainer>
  );
};

export default Calendar;
