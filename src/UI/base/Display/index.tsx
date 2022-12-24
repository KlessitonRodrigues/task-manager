import { Container, Label, Value } from './styled';

const Display = (props: DisplayProps) => (
  <Container size={props.size}>
    <Label show={!!props.label}>{props.label}</Label>
    <Value show={!!props.value} color={props.color}>
      {props.value}
    </Value>
  </Container>
);

export default Display;
