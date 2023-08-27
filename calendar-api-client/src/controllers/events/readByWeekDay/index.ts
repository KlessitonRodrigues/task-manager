import { readEvents } from '../read';

export const readByWeekDay = (config: ClientConfig) => (args: ReadEventByWeekDayArgs) => {
  const events = readEvents(config)(args);
  const ocurrencyEvents = events.filter(ev => ev.weekDays?.length);
  const verifyWeekDay = (weekDay: WeekDayName) =>
    ocurrencyEvents.filter(ev => ev.weekDays.indexOf(weekDay) >= 0);

  const eventsByWeek: EventsByWeek = {
    sun: verifyWeekDay('sun'),
    mon: verifyWeekDay('mon'),
    tue: verifyWeekDay('tue'),
    wed: verifyWeekDay('wed'),
    thu: verifyWeekDay('thu'),
    fri: verifyWeekDay('fri'),
    sat: verifyWeekDay('sat'),
  };

  return eventsByWeek;
};
