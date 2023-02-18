import moment from 'moment';
import CalendarDay from 'src/UI/base/CalendarDay';
import CalendarTodo from 'src/UI/base/CalendarTodo';
import CalendarWeek from 'src/UI/base/CalendarWeek';

import { formatEvents } from './formatEvents';
import { repeatedEvents } from './repeatedEvents';

export const renderCalendarData = (props: RenderCalendarDataProps) => {
  const { events, currentDate, changeWeek } = props;

  const currentMonth = moment(currentDate).get('month');
  const eventsData = repeatedEvents(events, currentDate);
  const weekDataArr = formatEvents(eventsData, currentDate);

  return weekDataArr.map((weekData, i) => {
    const daysToRender = weekData.daysData.map(dayData => {
      const { date, dayEvents } = dayData;
      const eventstoRender = dayEvents.map(ev => <CalendarTodo calendarEvent={ev} />);
      return (
        <CalendarDay day={date.day} month={date.month} selectedMonth={currentMonth}>
          {eventstoRender}
        </CalendarDay>
      );
    });
    return <CalendarWeek onClick={() => changeWeek(i)}>{daysToRender}</CalendarWeek>;
  });
};
