import useGlobalContext from 'src/hooks/useGlobalContext/index';

import { Container, DaysContainer, TopLeft } from './styled';

const CalendarWeek = (props: CalendarWeekProps) => {
  const { children, label, weekIndex } = props;
  const [global, setGlobal] = useGlobalContext();
  const expanded = global.selectedWeek === weekIndex;

  return (
    <Container show={expanded} onClick={() => setGlobal({ ...global, selectedWeek: weekIndex })}>
      <TopLeft>{label}</TopLeft>
      <DaysContainer>{children}</DaysContainer>
    </Container>
  );
};

export default CalendarWeek;
