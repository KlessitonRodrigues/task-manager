import React from 'react';
import useGlobalContext from 'src/hooks/useGlobalContext';
import CalendarContainer from 'src/UI/base/CalendarContainer';
import CalendarHeader from 'src/UI/base/CalendarHeader';
import * as actions from './actions';

export const Calendar = () => {
  const [global] = useGlobalContext();

  const calendarData = React.useMemo(
    () => actions.RenderCalendarData(global.currentDate),
    [global.localData.modifiedAt, global.currentDate]
  );

  return (
    <CalendarContainer>
      <CalendarHeader />
      {calendarData}
    </CalendarContainer>
  );
};

export default Calendar;
