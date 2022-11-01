import useGlobalContext from '@hooks/useGlobalContext/index';
import CalendarContainer from '@UI/base/CalendarContainer/index';
import CalendarHeader from '@UI/base/CalendarHeader/index';
import React from 'react';

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
