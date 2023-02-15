import moment, { Moment } from 'moment';

import { createUID } from './uid';

const weekNumbers = { 0: 'mon', 1: 'tue', 2: 'wen', 3: 'tur', 4: 'fri', 5: 'sat', 6: 'sun' };

export const zeroLeft = (n: number) => (n < 10 ? '0' + n : '' + n);

export const getTimeFormat = (): Intl.DateTimeFormatOptions => ({
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

export const dateInputToISO = (dateStr: string, iso: string) => {
  // dateInput = 2023-02-28
  const [yyyy, mm, dd] = dateStr.split('-').map(n => Number(n));
  const date = new Date(iso);
  date.setFullYear(yyyy);
  date.setMonth(mm);
  date.setDate(dd);
  return date.toISOString();
};

export const ISOToDateInput = (iso: string) => {
  // 2018-07-22
  const date = new Date(iso);
  return `${date.getFullYear()}-${zeroLeft(date.getMonth())}-${zeroLeft(date.getDate())}`;
};

export const timeInputToISO = (timeStr: string, iso: string) => {
  // timeInput = 23:59
  const [hh, mm] = timeStr.split(':').map(n => Number(n));
  const date = new Date(iso);
  date.setHours(hh);
  date.setMinutes(mm);
  return date.toISOString();
};

export const ISOToTimeInput = (iso: string) => {
  return new Date(iso).toLocaleTimeString('en', { hour12: false, timeStyle: 'short' });
};

export const splitDate = (date: Moment) => ({
  day: date.get('date'),
  month: date.get('month'),
  year: date.get('year'),
});

export const generateOccurecies = (events: CalendarEvent[], from: string, to: string) => {
  const newEvents: CalendarEvent[] = [];

  const generateWeekDates = (evDate: Moment, ev: CalendarEvent) => {
    // @ts-ignore
    const currentWeekDay = weekNumbers[evDate.get('weekday')];

    if (ev.repeatAt.includes(currentWeekDay)) {
      ev.eventDays.push({
        id: createUID(),
        dateISO: evDate.toISOString(),
      });
    }
  };

  const generateMonthDates = (evDate: Moment, ev: CalendarEvent) => {
    evDate.add(1, 'month');
  };

  events.forEach(ev => {
    if (!ev.repeatBy) return newEvents.push(ev);
    const fromDate = moment(from);
    const toDate = moment(to);

    while (fromDate.isBefore(toDate)) {
      if (ev.repeatBy === 'week') {
        generateWeekDates(fromDate, ev);
        fromDate.add(1, 'day');
      }

      if (ev.repeatBy === 'month') {
        generateMonthDates(fromDate, ev);
        fromDate.add(1, 'month');
      }
    }

    newEvents.push(ev);
  });

  return newEvents;
};
