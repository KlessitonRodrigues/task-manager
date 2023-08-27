type EventDayStatus = 'canceled' | 'todo' | 'doing' | 'done';

type EventFormRepeatPeriod = 'day' | 'week' | '2-week' | 'month';

type SplitedDate = {
  day: number;
  month: number;
  year: number;
  weekDay: number;
  weekDayName: string;
  weekOfYear: number;
  sec: number;
  min: number;
  hour: number;
  unix: number;
  dateKey: string;
  weekKey: string;
  timeKey: string;
  key: string;
};

type CalendarTodo = {
  id?: string;
  status?: EventDayStatus;
  doingTime?: number;
  dateISO?: string;
  notes?: string;
};

type CalendarEvent = {
  id?: string;
  name?: string;
  description?: string;
  dateISO?: string;
  repeatBy?: EventFormRepeatPeriod;
  repeatAt?: WeekDayName[];
  todos: CalendarTodo[];
};

type CalendarDayEvent = CalendarEvent & {
  todos: undefined;
  todoAmount: number;
  currentTodo: CalendarTodo;
  currentTodoOcurrence: number;
  currentTodoDateSplited: SplitedDate;
};

type CalendarWeekData = {
  date: { day: string; weekDay: string; month: string };
  dateData: CalendarDayEvent[];
};

type CalendarData = {
  weekOfYear: string;
  weekData: CalendarWeekData[];
};
