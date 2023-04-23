type TodoStatus = 'canceled' | 'todo' | 'doing' | 'done';

type UserEventTodo = {
  id: string;
  date: string;
  status: TodoStatus;
  note: string;
};

type UserEvents = {
  id: string;
  name: string;
  description: string;
  weekDays: WeekDayName[];
  todos: UserEventTodo[];
};
