import moment from 'moment';
import { calendarGap } from 'src/utils/date/calendarGap';
import { weekName } from 'src/utils/date/weekName';

export const repeatedEvents = (events: CalendarEvent[], dateStr: string) => {
  const { firstDay, lastDayObj } = calendarGap(dateStr);
  const newEvents: CalendarEvent[] = [];

  events.forEach(calendarEvent => {
    const occurrency = calendarEvent.repeatBy;

    // NO REPEATED
    if (!occurrency) {
      const dateISO = calendarEvent.dateISO;
      return newEvents.push({ ...calendarEvent, todos: [{ dateISO }] });
    }

    // REAPEAT WEEKLY
    if (occurrency === 'week') {
      const dateIndex = moment(firstDay);
      while (dateIndex.isBefore(lastDayObj)) {
        const dayOfWeek = dateIndex.get('weekday');
        // @ts-ignore
        if (calendarEvent.repeatAt.includes(weekName[dayOfWeek])) {
          calendarEvent.todos.push({ dateISO: dateIndex.toISOString() });
        }
        dateIndex.add(1, 'day');
      }
    }

    newEvents.push(calendarEvent);
  });

  return newEvents;
};
