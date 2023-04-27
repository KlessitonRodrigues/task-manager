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
    },
    {
      id: '000000000002',
      name: 'testing name2',
      description: 'testing description2',
      weekDays: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    },
  ],
  todos: [
    {
      id: '000000000001',
      eventId: '000000000001',
      date: { day: '01/01/2023', time: '07:10', iso: '' },
      note: 'testing note',
      status: 'todo',
    },
    {
      id: '000000000002',
      eventId: '000000000002',
      date: { day: '02/01/2023', time: '14:10', iso: '' },
      note: 'testing note2',
      status: 'todo',
    },
  ],
};
