import CalendarTodo from '../../CalendarTodo';
import { DayContainer, DayContent, DayHeader, WeekContainer, WeekContent } from '../styled';

const renderDayContent = (props: CalendarGridProps, day: DateInfo) => {
  const { eventsByWeek } = props;
  const dayEvents = eventsByWeek[day.weekDayName] || [];

  return (
    <DayContainer key={day.dateKey}>
      <DayHeader>{day.day}</DayHeader>
      <DayContent>
        {dayEvents.map(event => (
          <CalendarTodo key={event.id} userEvent={event} />
        ))}
      </DayContent>
    </DayContainer>
  );
};

export const renderWeeks = (props: CalendarGridProps) => {
  const { monthWeeks, onChangeWeek } = props;

  return monthWeeks.map((week, i) => (
    <WeekContainer key={week[i].dateKey} onClick={() => onChangeWeek(i)}>
      <WeekContent>{week.map(day => renderDayContent(props, day))}</WeekContent>
    </WeekContainer>
  ));
};
