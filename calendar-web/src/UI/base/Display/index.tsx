import { Container, Label, Value } from './styled';

const Display = (props: DisplayProps) => {
  const { color, label, size, value } = props;

  return (
    <Container size={size}>
      <Label show={!!label}>{label}</Label>
      <Value show={!!value} color={color}>
        {value}
      </Value>
    </Container>
  );
};

export default Display;
