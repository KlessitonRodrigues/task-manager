import CalendarDay from 'src/UI/base/CalendarDay';
import CalendarTodo from 'src/UI/base/CalendarTodo';
import CalendarWeek from 'src/UI/base/CalendarWeek';
import { client } from 'src/apiClient';

export const renderWeeks = () => {
  const events = client.controllers.event.read({ month: '01/01/2023' });
  const weeksToRender = [];

  events.map(() => {});
};
