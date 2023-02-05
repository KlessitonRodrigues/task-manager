import useGlobalContext from 'src/hooks/useGlobalContext/index';

import { Container, DaysContainer } from './styled';

const CalendarWeek = (props: CalendarWeekProps) => {
  const { children, weekIndex } = props;
  const [global, setGlobal] = useGlobalContext();
  const expanded = global.selectedWeek === weekIndex;

  const handlers = {
    changedWeek: () => setGlobal({ ...global, selectedWeek: weekIndex }),
  };

  return (
    <Container show={expanded} onClick={handlers.changedWeek}>
      <DaysContainer>{children}</DaysContainer>
    </Container>
  );
};

export default CalendarWeek;
