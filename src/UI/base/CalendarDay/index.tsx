import { zeroLeft } from 'src/utils/date';
import { Container, Content, Header } from './styled';

interface Props {
  children?: React.ReactNode;
  month: number;
  day: number;
  selectedMonth: number;
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const CalendarDay = (props: Props) => {
  return (
    <Container>
      <Header outOfMonth={props.selectedMonth !== props.month}>{zeroLeft(props.day)}</Header>
      <Content className="calendar-day-content">{props.children}</Content>
    </Container>
  );
};

export default CalendarDay;
