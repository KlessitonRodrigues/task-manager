import useActionDispatch from 'src/hooks/useActionDispatch';

import { formatTime } from './services/formatTime';
import { Column, Container, Time, Title } from './styled';

const CalendarTodo = (props: CalendarTodoProps) => {
  const { calendarEvent } = props;
  const [action, setAction] = useActionDispatch();

  const openEditForm = () =>
    setAction({ action: { to: 'EDIT_PANEL', type: 'EDIT', data: calendarEvent } });

  return (
    <Container onClick={openEditForm}>
      <Column>
        <Time>{formatTime(calendarEvent.currentTodo.dateISO)}</Time>
        <Title>{calendarEvent.name}</Title>
      </Column>
    </Container>
  );
};

export default CalendarTodo;
