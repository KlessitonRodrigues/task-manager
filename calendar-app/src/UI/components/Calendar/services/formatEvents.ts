import moment, { Moment } from 'moment';

const isSameDateDay = (date1: string, date2: Moment) => moment(date1).isSame(date2, 'day');

export const formatEvents = (events: CalendarEvent[], dateStr: string) => {
  const startDate = moment(dateStr);
  const weeks: CalendarWeekData[] = [];

  for (let i = 0; i < 5; i++) {
    const weekOfYear = startDate.weeks();
    const daysData: CalendarDayData[] = [];

    for (let j = 0; j < 7; j++) {
      const dayEvents = events.filter(ev => isSameDateDay(ev.eventDays[0].dateISO, startDate));
      daysData.push({
        dayEvents,
        date: {
          day: startDate.get('date'),
          month: startDate.get('month'),
        },
      });
      startDate.add(1, 'day');
    }

    weeks.push({ weekOfYear, daysData });
  }

  console.log(weeks);

  return weeks;
};
