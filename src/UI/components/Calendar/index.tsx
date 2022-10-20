import CalendarContainer from '@UI/base/CalendarContainer/index';
import CalendarDay from '@UI/base/CalendarDay/index';
import CalendarWeek from '@UI/base/CalendarWeek';

export const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarWeek label="week1">
        <CalendarDay>TODO</CalendarDay>
        <CalendarDay>TODO</CalendarDay>
        <CalendarDay>TODO</CalendarDay>
        <CalendarDay>TODO</CalendarDay>
        <CalendarDay>TODO</CalendarDay>
        <CalendarDay>TODO</CalendarDay>
        <CalendarDay>TODO</CalendarDay>
      </CalendarWeek>
      <CalendarWeek label="week2">TEST Test Test</CalendarWeek>
      <CalendarWeek label="week3">TEST Test Test</CalendarWeek>
      <CalendarWeek label="week4">TEST Test Test</CalendarWeek>
      <CalendarWeek label="week5">TEST Test Test</CalendarWeek>
      <CalendarWeek label="week6">TEST Test Test</CalendarWeek>
    </CalendarContainer>
  );
};

export default Calendar;
