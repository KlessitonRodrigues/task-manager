import { Container, DaysContainer } from './styled';

interface Props {
  children: React.ReactNode;
}

const CalendarContainer = (props: Props) => (
  <Container>
    <DaysContainer>{props.children}</DaysContainer>
  </Container>
);

export default CalendarContainer;
