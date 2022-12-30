import { BsPlus } from 'react-icons/bs';
import { zeroLeft } from 'src/utils/date';

import IconButton from '../IconButton/index';
import { AddButtonContainer, Container, Content, Header } from './styled';

const CalendarDay = (props: CalendarDayProps) => {
  const { day, month, selectedMonth, children } = props;

  return (
    <Container className="calendar-day">
      <Header outOfMonth={selectedMonth !== month}>{zeroLeft(day)}</Header>
      <Content className="calendar-day-content">{children}</Content>
      <AddButtonContainer className="calendar-day-button">
        <IconButton variant="solid" icon={<BsPlus />} />
      </AddButtonContainer>
    </Container>
  );
};

export default CalendarDay;
