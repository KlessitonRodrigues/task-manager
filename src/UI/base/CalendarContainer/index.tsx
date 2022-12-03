import { PropsWithChildren } from 'react';
import { Container, DaysContainer } from './styled';

const CalendarContainer = (props: PropsWithChildren) => (
  <Container>
    <DaysContainer>{props.children}</DaysContainer>
  </Container>
);

export default CalendarContainer;
