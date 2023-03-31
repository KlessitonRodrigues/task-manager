import useGlobalContext from 'src/hooks/useGlobalContext';

import { formatTime } from './services/formatTime';
import { Column, Container, Time, Title } from './styled';

const CalendarTodo = (props: CalendarTodoProps) => {
  const { calendarEvent } = props;
  const [global, setGlobal] = useGlobalContext();

  const openEditForm = () =>
    setGlobal({
      ...global,
      dispatchPanel: { nav: 'calendar', action: 'edit', data: calendarEvent },
    });

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
