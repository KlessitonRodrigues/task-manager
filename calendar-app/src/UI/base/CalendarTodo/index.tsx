import * as actions from './actions';
import { Column, Container, Time, Title } from './styled';

const CalendarTodo = (props: CalendarTodoProps) => {
  const { onClick, calendarEvent } = props;

  return (
    <Container onClick={() => onClick && onClick(calendarEvent)}>
      <Column>
        <Time>{actions.formatTime(calendarEvent.eventDays[0].dateISO)}</Time>
        <Title>{calendarEvent.name}</Title>
      </Column>
    </Container>
  );
};

export default CalendarTodo;
