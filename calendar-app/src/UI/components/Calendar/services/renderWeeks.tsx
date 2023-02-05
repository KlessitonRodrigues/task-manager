import CalendarDay from 'src/UI/base/CalendarDay';
import CalendarTodo from 'src/UI/base/CalendarTodo';
import CalendarWeek from 'src/UI/base/CalendarWeek';

import { formatEvents } from './formatEvents';
import { getEvents } from './getEvents';

export const RenderCalendarData = async (date: string) => {
  const events = await getEvents(date);
  const weekDataArr = formatEvents(events, date);

  return weekDataArr.map(weekData => {
    const daysToRender = weekData.daysData.map(dayData => {
      const eventstoRender = dayData.dayEvents.map(ev => <CalendarTodo calendarEvent={ev} />);

      return (
        <CalendarDay day={dayData.date.day} month={dayData.date.month} selectedMonth={1}>
          {eventstoRender}
        </CalendarDay>
      );
    });

    return <CalendarWeek weekIndex={weekData.weekOfYear.toString()}>{daysToRender}</CalendarWeek>;
  });
};
