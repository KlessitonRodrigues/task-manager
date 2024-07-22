type TodoStatus = 'canceled' | 'todo' | 'doing' | 'done';

type UserEventTodo = {
  id: string;
  eventId: string;
  status: TodoStatus;
  date: { day: string; time: string; iso: string };
  note: string;
};

type UserEvent = {
  id: string;
  name: string;
  description: string;
  weekDays: WeekDayName[];
  dateTime: string;
};
