import { Container, DaysContainer } from './styled';

const CalendarWeek = (props: CalendarWeekProps) => {
  const { onClick, children } = props;

  return (
    <Container onClick={onClick}>
      <DaysContainer>{children}</DaysContainer>
    </Container>
  );
};

export default CalendarWeek;
