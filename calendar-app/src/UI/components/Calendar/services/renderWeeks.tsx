import moment from 'moment';
import CalendarDay from 'src/UI/base/CalendarDay';
import CalendarTodo from 'src/UI/base/CalendarTodo';
import CalendarWeek from 'src/UI/base/CalendarWeek';

import { calendarData } from './calendarData';
import { repeatedEvents } from './repeatedEvents';

const renderTodos = (todo: CalendarDayEvent) => <CalendarTodo calendarEvent={todo} />;

const renderDays = (weekData: CalendarWeekData) => {
  return (
    <CalendarDay day={weekData.date.day} month={weekData.date.month} selectedMonth={'0'}>
      {weekData.dateData.map(renderTodos)}
    </CalendarDay>
  );
};

const renderWeeks = (calenderData: CalendarData, i: number) => {
  return (
    <CalendarWeek /*onClick={() => onExpandWeek(i)}*/>
      {calenderData.weekData.map(renderDays)}
    </CalendarWeek>
  );
};

export const renderCalendarData = (props: RenderCalendarDataProps) => {
  const { events, currentDate, onExpandWeek } = props;
  const currentMonth = moment(currentDate).get('month');
  const eventsData = repeatedEvents(events, currentDate);
  const data = calendarData(eventsData, currentDate);

  return data.map(renderWeeks);
};
