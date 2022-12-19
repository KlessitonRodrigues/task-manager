import moment, { Moment } from 'moment';
import CalendarDay from 'src/UI/base/CalendarDay/index';
import CalendarTodo from 'src/UI/base/CalendarTodo/index';
import CalendarWeek from 'src/UI/base/CalendarWeek/index';
import { apiRoutes } from 'src/data/api';
import { dateObjFrom } from 'src/utils/date';

const daysOfWeek = (weekData: EventsAndDates, targetDate: Moment): DayData[] => {
  const days = new Array(7).fill('');
  return days.map((v, i): DayData => {
    return {
      dayNumber: targetDate.weekday(i).get('date'),
      dayMonth: targetDate.get('months'),
      dayTasks: weekData.dates?.filter(date => targetDate.isSame(date.dateISO, 'date')) || [],
    };
  });
};

export const getCalendarData = async (dateStr: string) => {
  const fromTime = moment(dateStr).startOf('month');
  const toTime = moment(dateStr).endOf('month');
  const events = await apiRoutes.eventDates.read(fromTime.unix(), toTime.unix());

  return {
    week1: {
      weekOfYear: fromTime.weeks(),
      daysISO: daysOfWeek(events.data, fromTime),
    },
    week2: {
      weekOfYear: fromTime.add(1, 'week').weeks(),
      daysISO: daysOfWeek(events.data, fromTime),
    },
    week3: {
      weekOfYear: fromTime.add(1, 'week').weeks(),
      daysISO: daysOfWeek(events.data, fromTime),
    },
    week4: {
      weekOfYear: fromTime.add(1, 'week').weeks(),
      daysISO: daysOfWeek(events.data, fromTime),
    },
    week5: {
      weekOfYear: fromTime.add(1, 'week').weeks(),
      daysISO: daysOfWeek(events.data, fromTime),
    },
    week6: {
      weekOfYear: fromTime.add(1, 'week').weeks(),
      daysISO: daysOfWeek(events.data, fromTime),
    },
  };
};

export const RenderCalendarData = async (DateStr: string) => {
  const calendarData = await getCalendarData(DateStr);
  const dateObj = dateObjFrom(DateStr);
  const weeks = Object.keys(calendarData) as (keyof typeof calendarData)[];
  const WeeksToRender = [];

  for (const week of weeks) {
    const WeekData = calendarData[week];

    WeeksToRender.push(
      <CalendarWeek
        label={`week ${WeekData.weekOfYear}`}
        key={WeekData.weekOfYear}
        weekIndex={week}
      >
        {WeekData.daysISO?.map(day => (
          <CalendarDay
            selectedMonth={dateObj.month}
            month={day.dayMonth}
            day={day.dayNumber}
            key={day.dayMonth + day.dayNumber}
          >
            {day.dayTasks?.map(todo => (
              <CalendarTodo key={todo.id} taskEvent={todo} />
            ))}
          </CalendarDay>
        ))}
      </CalendarWeek>
    );
  }

  return WeeksToRender;
};
