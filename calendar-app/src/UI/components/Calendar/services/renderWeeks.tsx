import moment from 'moment';
import CalendarDay from 'src/UI/base/CalendarDay';
import CalendarTodo from 'src/UI/base/CalendarTodo';
import CalendarWeek from 'src/UI/base/CalendarWeek';

import { formatEvents } from './formatEvents';

export const renderCalendarData = (props: RenderCalendarDataProps) => {
  const { events, currentDate, changeWeek } = props;
  const firstMonthDay = moment(currentDate).startOf('month').startOf('week').toISOString();
  const weekDataArr = formatEvents(events, firstMonthDay);

  return weekDataArr.map((weekData, i) => {
    const daysToRender = weekData.daysData.map(dayData => {
      const eventstoRender = dayData.dayEvents.map(ev => <CalendarTodo calendarEvent={ev} />);
      return (
        <CalendarDay day={dayData.date.day} month={dayData.date.month} selectedMonth={1}>
          {eventstoRender}
        </CalendarDay>
      );
    });
    return <CalendarWeek onClick={() => changeWeek(i)}>{daysToRender}</CalendarWeek>;
  });
};
