import { TaskEvent } from 'src/@types/taskEvent';
import { Column, Container, Time, Title } from './styled';
import * as actions from './actions';

interface Props {
  taskEvent?: TaskEvent;
}

const CalendarTodo = (props: Props) => {
  const date = new Date(props.taskEvent?.dateISO || '');
  return (
    <Container>
      <Column>
        <Time>{actions.formatTime(date)}</Time>
        <Title>{props.taskEvent.name}</Title>
      </Column>
    </Container>
  );
};

export default CalendarTodo;
