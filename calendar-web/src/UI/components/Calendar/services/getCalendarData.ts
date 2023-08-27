import { client } from 'src/apiClient';

export const getCalendarData = (args: CalendarDatesByColumnArgs & ReadEventByWeekDayArgs) => {
  return {
    dateNow: client.calendar.dateNow(),
    monthWeeks: client.calendar.datesByColumns(args),
    eventsByWeek: client.event.readByWeekDay(args),
  };
};
