import { Container, Label, Value } from './styled';

const Display = ({ label, value, size }: DisplayProps) => (
  <Container size={size}>
    <Label show={!!label}>{label}</Label>
    <Value show={!!value}>{value}</Value>
  </Container>
);

export default Display;
