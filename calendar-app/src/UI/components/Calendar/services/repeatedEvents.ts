import moment from 'moment';
import { calendarDatesGap, weekNumbers } from 'src/utils/date';

export const repeatedEvents = (events: CalendarEvent[], dateStr: string) => {
  const { firstDay, lastDayObj } = calendarDatesGap(dateStr);
  const newEvents: CalendarEvent[] = [];

  events.forEach(calendarEvent => {
    const occurrency = calendarEvent.repeatBy;

    // REAPEAT NONE
    if (!occurrency) {
      const dateISO = calendarEvent.dateISO;
      return newEvents.push({ ...calendarEvent, eventDays: [{ dateISO }] });
    }

    // REAPEAT WEEKLY
    if (occurrency === 'week') {
      const dateIndex = moment(firstDay);
      while (dateIndex.isBefore(lastDayObj)) {
        const dayOfWeek = dateIndex.get('weekday');
        // @ts-ignore
        if (calendarEvent.repeatAt.includes(weekNumbers[dayOfWeek])) {
          calendarEvent.eventDays.push({ dateISO: dateIndex.toISOString() });
        }
        dateIndex.add(1, 'day');
      }
    }

    newEvents.push(calendarEvent);
  });

  return newEvents;
};
