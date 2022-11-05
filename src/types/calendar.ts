import { TodoEvent } from './todoEvent';

export type DayData = {
  dayNumber: number;
  dayMonth: number;
  dayTasks: TodoEvent[];
};

export type WeekData = {
  weekOfYear: number;
  daysISO: DayData[];
};

export type CalendarData = {
  week1: WeekData;
  week2: WeekData;
  week3: WeekData;
  week4: WeekData;
  week5: WeekData;
  week6: WeekData;
};

export type DateObj = {
  weekDay: number;
  dayOfMonth: number;
  month: number;
  year: number;
};
