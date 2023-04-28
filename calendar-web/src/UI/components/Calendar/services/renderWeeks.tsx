import CalendarDay from 'src/UI/base/CalendarDay';
import CalendarTodo from 'src/UI/base/CalendarTodo';
import CalendarWeek from 'src/UI/base/CalendarWeek';
import { client } from 'src/apiClient';

export const renderWeeks = () => {
  const { monthWeeks } = client.calendar.monthDates(new Date().toISOString());

  return monthWeeks.map(week => (
    <CalendarWeek>
      {week.map((day: any) => (
        <CalendarDay day="1" month="2" selectedMonth="2">
          a
        </CalendarDay>
      ))}
    </CalendarWeek>
  ));
};
