export type TaskEventGroup = {
  id: string;
  groupindex: number;
  repeatBy: 'day' | 'week' | 'month' | 'year';
  repeatAt: ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[];
  repeatTimes: number;
};

export type TaskEvent = {
  id: string;
  name: string;
  description: string;
  dateISO: string;
  tags: string[];
  note: string;
  group: TaskEventGroup;
};

export const taskEventMock: TaskEvent = {
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
    repeatAt: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    repeatTimes: 1,
  },
};
