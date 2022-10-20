import { Container } from './styled';

interface Props {
  children: React.ReactNode;
}

const CalendarDay = (props: Props) => <Container>{props.children}</Container>;

export default CalendarDay;
