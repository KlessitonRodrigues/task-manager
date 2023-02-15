import moment from 'moment';
import { splitDate } from 'src/utils/date';

export const formatEvents = (events: CalendarEvent[], dateStr: string) => {
  const startDate = moment(dateStr);
  const weeks: CalendarWeekData[] = [];
  const flatEvents: Record<string, CalendarEvent[]> = {};

  events.forEach(ev =>
    ev.eventDays.forEach(evDay => {
      const { day, month, year } = splitDate(moment(evDay.dateISO));
      const key = `${day}-${month}-${year}`;

      if (flatEvents[key]?.length) return flatEvents[key].push({ ...ev, eventDays: [evDay] });
      else flatEvents[key] = [{ ...ev, eventDays: [evDay] }];
    })
  );

  // Month weeks
  new Array(5).fill(0).forEach(() => {
    const weekOfYear = startDate.weeks();
    const daysData: CalendarDayData[] = [];

    // Week days
    new Array(7).fill(0).forEach(() => {
      const { day, month, year } = splitDate(startDate);
      const key = `${day}-${month}-${year}`;

      daysData.push({
        date: { day, month },
        dayEvents: flatEvents[key] || [],
      });

      startDate.add(1, 'day');
    });

    weeks.push({ weekOfYear, daysData });
  });

  return weeks;
};
