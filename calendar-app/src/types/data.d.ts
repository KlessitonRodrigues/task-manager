type EventDayStatus = 'cancel' | 'todo' | 'doing' | 'done';

type EventDay = {
  id?: string;
  status?: EventDayStatus;
  doingTime?: number;
};

type CalendarEvent = {
  id?: string;
  name?: string;
  description?: string;
  tagIds?: string[];
  noteId?: string;
  events: EventDay[];
};

type EventFormRepeatPeriod = 'day' | 'month';

type EventFormRepeatAtDays = ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[];

type DayData = {
  dayNumber: number;
  dayMonth: number;
  dayEvents: EventDay[];
};

type WeekData = {
  weekOfYear: number;
  daysISO: DayData[];
};

type CalendarData = {
  week1: WeekData;
  week2: WeekData;
  week3: WeekData;
  week4: WeekData;
  week5: WeekData;
  week6: WeekData;
};

type DateObj = {
  weekDay: number;
  dayOfMonth: number;
  month: number;
  year: number;
};
