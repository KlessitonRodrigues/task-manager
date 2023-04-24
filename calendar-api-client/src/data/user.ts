export const UserTestData: User = {
  information: {
    name: 'testing user',
    lastName: 'testing lastName',
    email: 'testing@email.com',
  },
  settings: {
    themeMode: 'light',
    themeColor: '#222222',
    syncData: false,
  },
  events: [
    {
      id: '000000000001',
      name: 'testing name',
      description: 'testing description',
      weekDays: ['sun', 'mon', 'tue', 'fri', 'thu', 'fri', 'sat'],
      todos: [
        { id: '000000000001', date: '', note: 'testing note', status: 'todo' },
        { id: '000000000002', date: '', note: 'testing note2', status: 'todo' },
      ],
    },
    {
      id: '000000000002',
      name: 'testing name2',
      description: 'testing description2',
      weekDays: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
      todos: [
        { id: '000000000001', date: '', note: 'testing note', status: 'todo' },
        { id: '000000000002', date: '', note: 'testing note2', status: 'todo' },
      ],
    },
  ],
};
