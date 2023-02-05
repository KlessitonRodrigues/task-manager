import moment from 'moment';

export const formatEvents = (events: CalendarEvent[], dateStr: string) => {
  const startDate = moment(dateStr);
  const weeks: CalendarWeekData[] = [];

  for (let i = 0; i < 5; i++) {
    const weekOfYear = startDate.weeks();
    const daysData: CalendarDayData[] = [];

    for (let j = 0; j < 7; j++) {
      const dayEvents = events.filter(ev => ev.eventDays[0].unixDate === startDate.unix());
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

  return weeks;
};
