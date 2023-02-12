import { zeroLeft } from 'src/utils/date';

import { Container, Content, Header } from './styled';

const CalendarDay = (props: CalendarDayProps) => {
  const { day, month, selectedMonth, children } = props;

  return (
    <Container>
      <Header outOfMonth={selectedMonth !== month}>{zeroLeft(day)}</Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default CalendarDay;
