import { Container, Number } from './styled';

interface Props {
  children?: React.ReactNode;
  number: number;
}

const CalendarDay = (props: Props) => (
  <Container>
    <Number>{props.number}</Number>
    {props.children}
  </Container>
);

export default CalendarDay;
