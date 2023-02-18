import moment from 'moment';
import { calendarDatesGap, splitDate } from 'src/utils/date';

export const formatEvents = (events: CalendarEvent[], dateStr: string) => {
  const { firstDayObj } = calendarDatesGap(dateStr);
  const dataIndex = moment(firstDayObj);

  const flatEvents: Record<string, CalendarEvent[]> = {};
  events.forEach(ev =>
    ev.eventDays.forEach(evDay => {
      const { day, month, year } = splitDate(moment(evDay.dateISO));
      const key = `${day}-${month}-${year}`;

      if (flatEvents[key]?.length) return flatEvents[key].push({ ...ev, eventDays: [evDay] });
      else flatEvents[key] = [{ ...ev, eventDays: [evDay] }];
    })
  );

  const eventsByWeek = new Array(6).fill(0).map<CalendarWeekData>(() => {
    const { weekOfYear } = splitDate(dataIndex);

    const eventsByDate = new Array(7).fill(0).map<CalendarDayData>(() => {
      const { day, month, year } = splitDate(dataIndex);
      const key = `${day}-${month}-${year}`;
      dataIndex.add(1, 'day');
      console.log('LOG');

      return {
        date: { day, month },
        dayEvents: flatEvents[key] || [],
      };
    });

    return {
      weekOfYear,
      daysData: eventsByDate,
    };
  });

  return eventsByWeek;
};
