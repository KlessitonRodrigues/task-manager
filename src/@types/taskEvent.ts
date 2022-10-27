export type TaskEventGroup = {
  id: string;
  groupSize: number;
  groupindex: number;
  repeatBy: 'weekly' | 'monthly' | 'yearly';
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
    groupSize: 1,
    groupindex: 0,
    repeatBy: 'weekly',
    repeatAt: [],
    repeatTimes: 1,
  },
};
