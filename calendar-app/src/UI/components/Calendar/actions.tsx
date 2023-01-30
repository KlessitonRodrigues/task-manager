import moment, { Moment, weekdays } from 'moment';
import CalendarDay from 'src/UI/base/CalendarDay/index';
import CalendarTodo from 'src/UI/base/CalendarTodo/index';
import CalendarWeek from 'src/UI/base/CalendarWeek/index';
import { eventApi } from 'src/services/api/events';
import { dateObjFrom } from 'src/utils/date';

const daysOfWeek = (flatEvents: CalendarEvent[], targetDate: Moment): DayData[] => {
  const arr = new Array(7).fill(0);
  return arr.map(() => {
    const dayData = {
      day: { date: targetDate.get('date'), month: targetDate.get('month') },
      dayEvents: flatEvents.filter(ev => targetDate.isSame(ev.eventDays[0].unixDate, 'day')),
    };
    targetDate.add(1, 'day');
    return dayData;
  });
};

export const getCalendarData = async (dateStr: string) => {
  const fromTime = moment(dateStr).startOf('month').startOf('week');
  const toTime = moment(dateStr).endOf('month').endOf('week');
  const events = await eventApi.fetchEvent({
    db: 'local',
    fromDate: fromTime.unix(),
    toDate: toTime.unix(),
  });

  const flatEventDate = events.reduce<CalendarEvent[]>((newArr, ev) => {
    ev.eventDays.forEach(eventDay => newArr.push({ ...ev, eventDays: [eventDay] }));
    return newArr;
  }, []);

  return {
    week1: {
      weekOfYear: fromTime.weeks(),
      daysISO: daysOfWeek(flatEventDate, fromTime),
    },
    week2: {
      weekOfYear: fromTime.weeks(),
      daysISO: daysOfWeek(flatEventDate, fromTime),
    },
    week3: {
      weekOfYear: fromTime.weeks(),
      daysISO: daysOfWeek(flatEventDate, fromTime),
    },
    week4: {
      weekOfYear: fromTime.weeks(),
      daysISO: daysOfWeek(flatEventDate, fromTime),
    },
    week5: {
      weekOfYear: fromTime.weeks(),
      daysISO: daysOfWeek(flatEventDate, fromTime),
    },
    week6: {
      weekOfYear: fromTime.weeks(),
      daysISO: daysOfWeek(flatEventDate, fromTime),
    },
  };
};

export const RenderCalendarData = async (page: CalendarPageStateHook) => {
  const [pageState, setPage] = page;
  const calendarData = await getCalendarData(pageState.currentDate);
  const dateObj = dateObjFrom(pageState.currentDate);
  const weeks = Object.keys(calendarData) as (keyof typeof calendarData)[];
  const WeeksToRender = [];

  for (const week of weeks) {
    const { weekOfYear, daysISO } = calendarData[week];

    WeeksToRender.push(
      <CalendarWeek label={`week ${weekOfYear}`} key={weekOfYear} weekIndex={week}>
        {daysISO?.map(({ day, dayEvents }) => (
          <CalendarDay
            selectedMonth={dateObj.month}
            month={day.month}
            day={day.date}
            key={`${day.month} ${day.date}`}
          >
            {dayEvents?.map(event => (
              <CalendarTodo
                key={event.id}
                calendarEvent={event}
                onClick={() =>
                  setPage({ ...pageState, editingEvent: event, sidePanel: 'editEvent' })
                }
              />
            ))}
          </CalendarDay>
        ))}
      </CalendarWeek>
    );
  }

  return WeeksToRender;
};
