import { Container, InputField, Label } from './styled';

interface Props {
  label?: string;
  type?: string;
  value?: string;
  onChange?: () => void;
}

const Input = (props: Props) => (
  <Container>
    <Label>{props.label}</Label>
    <InputField type={props.type} value={props.value} />
  </Container>
);

export default Input;
