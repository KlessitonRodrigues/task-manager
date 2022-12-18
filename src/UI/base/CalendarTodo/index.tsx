import * as actions from './actions';
import { Column, Container, Time, Title } from './styled';

const CalendarTodo = (props: CalendarTodoProps) => {
  const date = new Date(props.taskEvent?.dateISO || '');
  return (
    <Container>
      <Column>
        <Time>{actions.formatTime(date)}</Time>
        <Title>{'NONE'}</Title>
      </Column>
    </Container>
  );
};

export default CalendarTodo;
