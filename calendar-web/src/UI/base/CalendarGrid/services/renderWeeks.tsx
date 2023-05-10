import CalendarTodo from '../../CalendarTodo';
import { DayContainer, DayContent, DayHeader, WeekContainer, WeekContent } from '../styled';

const renderDay = (props: CalendarGridProps, day: DateInfo) => {
  const { eventsByWeek } = props;
  const dayEvents = eventsByWeek[day.weekDayName] || [];

  return (
    <DayContainer>
      <DayHeader>{day.day}</DayHeader>
      <DayContent>
        {dayEvents.map(event => (
          <CalendarTodo userEvent={event} />
        ))}
      </DayContent>
    </DayContainer>
  );
};

export const renderWeeks = (props: CalendarGridProps) => {
  const { monthWeeks, onChangeWeek } = props;
  console.log(props.eventsByWeek);

  return monthWeeks.map((week, i) => (
    <WeekContainer onClick={() => onChangeWeek(i)}>
      <WeekContent>{week.map(day => renderDay(props, day))}</WeekContent>
    </WeekContainer>
  ));
};
