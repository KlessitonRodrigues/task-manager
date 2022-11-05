import React from 'react';
import useGlobalContext from 'src/hooks/useGlobalContext/index';
import CalendarContainer from 'src/UI/base/CalendarContainer/index';
import CalendarHeader from 'src/UI/base/CalendarHeader/index';
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
