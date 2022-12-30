import * as actions from './actions';
import { Column, Container, Time, Title } from './styled';

const CalendarTodo = (props: CalendarTodoProps) => {
  const { onClick, calendarEvent } = props;
  const date = new Date(calendarEvent?.dateISO || '');

  return (
    <Container onClick={() => onClick && onClick(calendarEvent)}>
      <Column>
        <Time>{actions.formatTime(date)}</Time>
        <Title>{calendarEvent.event.name}</Title>
      </Column>
    </Container>
  );
};

export default CalendarTodo;
