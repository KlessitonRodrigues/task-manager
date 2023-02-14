import moment, { Moment } from 'moment';
import { getDayAndMonthNumbers } from 'src/utils/date';

export const formatEvents = (events: CalendarEvent[], dateStr: string) => {
  const startDate = moment(dateStr);
  const weeks: CalendarWeekData[] = [];
  const flatEvents: (CalendarEvent & { day: number; month: number })[] = [];

  events.forEach(ev =>
    ev.eventDays.forEach(evDay =>
      flatEvents.push({
        ...ev,
        eventDays: [evDay],
        ...getDayAndMonthNumbers(moment(evDay.dateISO)),
      })
    )
  );

  // Month weeks
  new Array(5).fill(0).forEach(() => {
    const weekOfYear = startDate.weeks();
    const daysData: CalendarDayData[] = [];

    // Week days
    new Array(7).fill(0).forEach(() => {
      const current = getDayAndMonthNumbers(startDate);
      const dayEvents = flatEvents.filter(ev => {
        return ev.day === current.day && ev.month === current.month;
      });

      daysData.push({
        dayEvents,
        date: current,
      });

      startDate.add(1, 'day');
    });

    weeks.push({ weekOfYear, daysData });
  });

  return weeks;
};
