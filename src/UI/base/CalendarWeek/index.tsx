import { Container, DaysContainer, TopLeft } from './styled';

interface Props {
  children: React.ReactNode;
  label: string;
}

const CalendarWeek = (props: Props) => (
  <Container>
    <TopLeft>{props.label}</TopLeft>
    <DaysContainer>{props.children}</DaysContainer>
  </Container>
);

export default CalendarWeek;
