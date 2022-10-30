import { Container, Content, Number } from './styled';

interface Props {
  children?: React.ReactNode;
  number: number;
}

const CalendarDay = (props: Props) => (
  <Container>
    <Number>{props.number}</Number>
    <Content>{props.children}</Content>
  </Container>
);

export default CalendarDay;
