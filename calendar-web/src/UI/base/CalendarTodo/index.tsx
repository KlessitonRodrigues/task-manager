import useActionDispatch from 'src/hooks/useActionDispatch';

import { formatTime } from './services/formatTime';
import { Column, Container, Time, Title } from './styled';

const CalendarTodo = (props: CalendarTodoProps) => {
  const { userEvent } = props;
  const [action, setAction] = useActionDispatch();

  //const openEditForm = () =>
  //  setAction({ action: { to: 'EDIT_PANEL', type: 'EDIT', data:  } });

  return (
    <Container>
      <Column>
        <Time>{userEvent.dateTime}</Time>
        <Title>{userEvent.name}</Title>
      </Column>
    </Container>
  );
};

export default CalendarTodo;
