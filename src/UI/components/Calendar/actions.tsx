import api from '@api/index';
import CalendarDay from '@UI/base/CalendarDay/index';
import CalendarTodo from '@UI/base/CalendarTodo/index';
import CalendarWeek from '@UI/base/CalendarWeek/index';
import moment, { Moment } from 'moment';
import { CalendarData, DayData } from 'src/@types/calendar';
import { TaskEvent } from 'src/@types/taskEvent';

const daysOfWeek = (tasks: TaskEvent[], targetDate: Moment): DayData[] => {
  const days = new Array(7).fill('');
  return days.map((v, i): DayData => {
    return {
      dayNumber: targetDate.weekday(i).get('date'),
      dayMonth: targetDate.get('months'),
      dayTasks: tasks?.filter(task => targetDate.isSame(task.dateISO, 'date')),
    };
  });
};

export const getCalendarData = (dateStr: string): CalendarData => {
  const date = moment(dateStr).set('day', 1);
  const intervalDate = {
    start: moment(dateStr).startOf('month').add(-10, 'day').toISOString(),
    end: moment(dateStr).endOf('months').add(11, 'day').toISOString(),
  };
  const tasks = api.localApi.tasks.READTASKSBYINTERVAL(intervalDate);
  console.log(intervalDate, tasks);

  return {
    week1: {
      weekOfYear: date.weeks(),
      daysISO: daysOfWeek(tasks, date),
    },
    week2: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(tasks, date),
    },
    week3: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(tasks, date),
    },
    week4: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(tasks, date),
    },
    week5: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(tasks, date),
    },
    week6: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(tasks, date),
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
