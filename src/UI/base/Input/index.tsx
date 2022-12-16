import { Container, InputField, Label } from './styled';

const Input = (props: InputProps) => (
  <Container>
    <Label>{props.label}</Label>
    <InputField
      type={props.type}
      value={props.value}
      placeholder={props.placeHolder}
      onChange={ev => props.onChange && props.onChange(ev.target.value)}
    />
  </Container>
);

export default Input;
