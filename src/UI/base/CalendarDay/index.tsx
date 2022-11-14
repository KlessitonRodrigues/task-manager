import { BsPlus } from 'react-icons/bs';
import { zeroLeft } from 'src/utils/date';
import IconButton from '../IconButton/index';
import { AddButtonContainer, Container, Content, Header } from './styled';

interface Props {
  children?: React.ReactNode;
  month: number;
  day: number;
  selectedMonth: number;
}

const CalendarDay = (props: Props) => {
  return (
    <Container>
      <Header outOfMonth={props.selectedMonth !== props.month}>{zeroLeft(props.day)}</Header>
      <Content className="calendar-day-content">{props.children}</Content>
      <AddButtonContainer className='calendar-day-button'>
        <IconButton variant='outiline' icon={<BsPlus />} />
      </AddButtonContainer>
    </Container>
  );
};

export default CalendarDay;
