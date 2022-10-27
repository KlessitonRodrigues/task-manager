import useGlobalContext from '@hooks/useGlobalContext/index';
import CalendarContainer from '@UI/base/CalendarContainer/index';
import CalendarDay from '@UI/base/CalendarDay/index';
import CalendarHeader from '@UI/base/CalendarHeader/index';
import CalendarTodo from '@UI/base/CalendarTodo/index';
import CalendarWeek from '@UI/base/CalendarWeek';
import { setLocalStorage } from '@utils/localStorage';
import { useEffect } from 'react';

export const Calendar = () => {
  const [global] = useGlobalContext();

  useEffect(() => {
    setLocalStorage(global.localData);
  }, [global.localData.taskEvent.length]);

  return (
    <CalendarContainer>
      <CalendarHeader />
      <CalendarWeek label="week1">
        <CalendarDay number={1}>
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
        </CalendarDay>
        <CalendarDay number={2}>
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
        </CalendarDay>
        <CalendarDay number={3}>
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
        </CalendarDay>
        <CalendarDay number={4}>
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
        </CalendarDay>
        <CalendarDay number={5}>
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
        </CalendarDay>
        <CalendarDay number={6}>
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
        </CalendarDay>
        <CalendarDay number={7}>
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
          <CalendarTodo />
        </CalendarDay>
      </CalendarWeek>
      <CalendarWeek label="week2">
        <CalendarDay number={1}></CalendarDay>
        <CalendarDay number={2}></CalendarDay>
        <CalendarDay number={3}></CalendarDay>
        <CalendarDay number={4}></CalendarDay>
        <CalendarDay number={5}></CalendarDay>
        <CalendarDay number={6}></CalendarDay>
        <CalendarDay number={7}></CalendarDay>
      </CalendarWeek>
      <CalendarWeek label="week3">
        <CalendarDay number={1}></CalendarDay>
        <CalendarDay number={2}></CalendarDay>
        <CalendarDay number={3}></CalendarDay>
        <CalendarDay number={4}></CalendarDay>
        <CalendarDay number={5}></CalendarDay>
        <CalendarDay number={6}></CalendarDay>
        <CalendarDay number={7}></CalendarDay>
      </CalendarWeek>
      <CalendarWeek label="week4">
        <CalendarDay number={1}></CalendarDay>
        <CalendarDay number={2}></CalendarDay>
        <CalendarDay number={3}></CalendarDay>
        <CalendarDay number={4}></CalendarDay>
        <CalendarDay number={5}></CalendarDay>
        <CalendarDay number={6}></CalendarDay>
        <CalendarDay number={7}></CalendarDay>
      </CalendarWeek>
      <CalendarWeek label="week5">
        <CalendarDay number={1}></CalendarDay>
        <CalendarDay number={2}></CalendarDay>
        <CalendarDay number={3}></CalendarDay>
        <CalendarDay number={4}></CalendarDay>
        <CalendarDay number={5}></CalendarDay>
        <CalendarDay number={6}></CalendarDay>
        <CalendarDay number={7}></CalendarDay>
      </CalendarWeek>
      <CalendarWeek label="week6">
        <CalendarDay number={1}></CalendarDay>
        <CalendarDay number={2}></CalendarDay>
        <CalendarDay number={3}></CalendarDay>
        <CalendarDay number={4}></CalendarDay>
        <CalendarDay number={5}></CalendarDay>
        <CalendarDay number={6}></CalendarDay>
        <CalendarDay number={7}></CalendarDay>
      </CalendarWeek>
    </CalendarContainer>
  );
};

export default Calendar;
