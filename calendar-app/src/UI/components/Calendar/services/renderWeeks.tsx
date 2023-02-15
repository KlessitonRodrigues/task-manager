import moment from 'moment';
import CalendarDay from 'src/UI/base/CalendarDay';
import CalendarTodo from 'src/UI/base/CalendarTodo';
import CalendarWeek from 'src/UI/base/CalendarWeek';

import { formatEvents } from './formatEvents';

export const renderCalendarData = (props: RenderCalendarDataProps) => {
  const { events, currentDate, changeWeek } = props;
  const date = moment(currentDate);
  const selectedMonth = date.get('month');
  const firstCalendarDay = date.startOf('month').startOf('week').toISOString();
  const weekDataArr = formatEvents(events, firstCalendarDay);

  return weekDataArr.map((weekData, i) => {
    const daysToRender = weekData.daysData.map(dayData => {
      const { date, dayEvents } = dayData;
      const eventstoRender = dayEvents.map(ev => <CalendarTodo calendarEvent={ev} />);
      return (
        <CalendarDay day={date.day} month={date.month} selectedMonth={selectedMonth}>
          {eventstoRender}
        </CalendarDay>
      );
    });
    return <CalendarWeek onClick={() => changeWeek(i)}>{daysToRender}</CalendarWeek>;
  });
};
