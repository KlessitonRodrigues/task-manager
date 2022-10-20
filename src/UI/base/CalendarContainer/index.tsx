import { Container, DaysContainer, Weekday, WeekdayContainer } from './styled';

interface Props {
  children: React.ReactNode;
}

const CalendarContainer = (props: Props) => (
  <Container>
    <WeekdayContainer>
      <Weekday>MON</Weekday>
      <Weekday>TUE</Weekday>
      <Weekday>WEN</Weekday>
      <Weekday>TUR</Weekday>
      <Weekday>FRI</Weekday>
      <Weekday>SAT</Weekday>
      <Weekday>SUN</Weekday>
    </WeekdayContainer>
    <DaysContainer>{props.children}</DaysContainer>
  </Container>
);

export default CalendarContainer;
