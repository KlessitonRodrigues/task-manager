import React, { PropsWithChildren } from 'react';
import { Container, DaysContainer } from './styled';

const CalendarContainer = (props: React.PropsWithChildren) => (
  <Container>
    <DaysContainer>{props.children}</DaysContainer>
  </Container>
);

export default CalendarContainer;
