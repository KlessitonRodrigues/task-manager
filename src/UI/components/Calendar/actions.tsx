import moment, { Moment } from 'moment';
import { apiRoutes } from 'src/data/api';
import CalendarDay from 'src/UI/base/CalendarDay/index';
import CalendarTodo from 'src/UI/base/CalendarTodo/index';
import CalendarWeek from 'src/UI/base/CalendarWeek/index';
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
  const date = moment(dateStr).set('day', 1);
  const fromTime = moment(dateStr).startOf('month').add(-10, 'day').unix();
  const toTime = moment(dateStr).endOf('months').add(11, 'day').unix();
  const events = await apiRoutes.eventDates.read(fromTime, toTime);

  return {
    week1: {
      weekOfYear: date.weeks(),
      daysISO: daysOfWeek(events.data, date),
    },
    week2: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(events.data, date),
    },
    week3: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(events.data, date),
    },
    week4: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(events.data, date),
    },
    week5: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(events.data, date),
    },
    week6: {
      weekOfYear: date.add(1, 'week').weeks(),
      daysISO: daysOfWeek(events.data, date),
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
