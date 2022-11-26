export type TodoEventGroup = {
  id: string;
  groupindex: number;
  repeatBy: 'day' | 'week' | 'month' | 'year';
  repeatAt: ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[];
  repeatTimes: number;
};

export type TodoEvent = {
  id: string;
  name: string;
  description: string;
  dateISO: string;
  tags: string[];
  note: string;
  group: TodoEventGroup;
};

export const newTodoEventMock = (): TodoEvent => ({
  id: '',
  name: '',
  description: '',
  dateISO: '',
  note: '',
  tags: [],
  group: {
    id: '',
    groupindex: 0,
    repeatBy: 'day',
    repeatAt: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    repeatTimes: 1,
  },
});

export type TodoEvent2 = {
  id: string;
  name: string;
  description: string;
  tagIds: string[];
  noteId: string;
};

export type TodoEventDate = {
  todoEventId: string;
  status: 'cancelled' | 'todo' | 'doing' | 'done';
  dateISO: string;
  dateTime: number;
  startedAt: number;
  completedAt: number;
};
