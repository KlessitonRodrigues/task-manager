import { useEffect, useState } from 'react';
import CalendarContainer from 'src/UI/base/CalendarContainer';
import CalendarHeader from 'src/UI/base/CalendarHeader';

import * as actions from './actions';

export const Calendar = (props: CalendarProps) => {
  const { pageState } = props;
  const [calendarData, setCalendatData] = useState([]);

  const handleCalendarEventEdit = (cEv: CalendarEvent) => {
    console.log(cEv);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await actions.RenderCalendarData(pageState.currentDate, handleCalendarEventEdit);
      setCalendatData(data);
    };
    fetch().catch(err => console.log(err));
  }, [pageState.currentDate]);

  return (
    <CalendarContainer>
      <CalendarHeader pageState={props.pageState} setPageState={props.setPageState} />
      {calendarData}
    </CalendarContainer>
  );
};

export default Calendar;
