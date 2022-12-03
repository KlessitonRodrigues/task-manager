import { BsPlus } from 'react-icons/bs';
import { zeroLeft } from 'src/utils/date';
import IconButton from '../IconButton/index';
import { AddButtonContainer, Container, Content, Header } from './styled';

const CalendarDay = (props: CalendarDayProps) => {
  return (
    <Container>
      <Header outOfMonth={props.selectedMonth !== props.month}>{zeroLeft(props.day)}</Header>
      <Content className="calendar-day-content">{props.children}</Content>
      <AddButtonContainer className="calendar-day-button">
        <IconButton variant="solid" icon={<BsPlus />} />
      </AddButtonContainer>
    </Container>
  );
};

export default CalendarDay;
