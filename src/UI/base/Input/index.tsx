import { Container, InputField, Label } from './styled';

interface Props {
  label?: string;
  type?: string;
  value?: string | number;
  placeHolder?: string;
  onChange?: (value: string) => void;
}

const Input = (props: Props) => (
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
