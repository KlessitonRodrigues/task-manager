import api from '@api/index';
import CalendarDay from '@UI/base/CalendarDay/index';
import CalendarTodo from '@UI/base/CalendarTodo/index';
import CalendarWeek from '@UI/base/CalendarWeek/index';
import moment, { Moment } from 'moment';
import { CalendarData, DayData } from 'src/@types/calendar';

const daysOfWeek = (targetDate: Moment): DayData[] => {
  const days = new Array(7).fill('');
  const tasks = api.localApi.tasks.readTasks();

  return days.map((v, i): DayData => {
    return {
      dayNumber: targetDate.weekday(i).get('date'),
      dayMonth: targetDate.get('months'),
      dayTasks: tasks?.filter(task => targetDate.isSame(task.dateISO, 'day')),
    };
  });
};

export const getCalendarData = (dateStr: string): CalendarData => {
  const date = moment(dateStr).set('day', 1);

  return {
    week1: {
      weekOfYear: date.weeks(),
      daysISO: daysOfWeek(date),
    },
    week2: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(date),
    },
    week3: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(date),
    },
    week4: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(date),
    },
    week5: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(date),
    },
    week6: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(date),
    },
  };
};

export const RenderCalendarData = (DateStr: string) => {
  const calendarData = getCalendarData(DateStr);

  const renderData = Object.entries(calendarData).map(([key, week]) => {
    return (
      <CalendarWeek label={`week ${week.weekOfYear}`} key={week.weekOfYear}>
        {week.daysISO.map(day => (
          <CalendarDay number={day.dayNumber} key={day.dayMonth + day.dayNumber}>
            {day.dayTasks.map(todo => (
              <CalendarTodo key={todo.id} taskEvent={todo} />
            ))}
          </CalendarDay>
        ))}
      </CalendarWeek>
    );
  });

  return renderData;
};
