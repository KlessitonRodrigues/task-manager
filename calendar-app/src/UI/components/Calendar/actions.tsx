import moment, { Moment } from 'moment';
import CalendarDay from 'src/UI/base/CalendarDay/index';
import CalendarTodo from 'src/UI/base/CalendarTodo/index';
import CalendarWeek from 'src/UI/base/CalendarWeek/index';
import { apiRoutes } from 'src/services/api';
import { dateObjFrom } from 'src/utils/date';

const daysOfWeek = (weekData: EventsAndDates, targetDate: Moment): DayData[] => {
  return new Array(7).fill('').map((v, i) => {
    return {
      dayNumber: targetDate.weekday(i).get('date'),
      dayMonth: targetDate.get('months'),
      dayEvents: weekData.dates.reduce((arr, date) => {
        if (targetDate.isSame(date.dateISO, 'date'))
          arr.push({
            ...date,
            event: weekData.events.find(ev => ev.id === date.eventId),
          });
        return arr;
      }, []),
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
        {daysISO?.map(({ dayMonth, dayNumber, dayEvents }) => (
          <CalendarDay
            selectedMonth={dateObj.month}
            month={dayMonth}
            day={dayNumber}
            key={`${dayMonth} ${dayNumber}`}
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
