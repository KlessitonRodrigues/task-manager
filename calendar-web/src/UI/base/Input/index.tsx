import If from '../If';
import InfoTag from '../InfoTag';
import { Container, InputField, Label } from './styled';

const Input = (props: InputProps) => {
  const { label, placeHolder, type, value, required, description, onChange } = props;

  return (
    <Container>
      <Label>
        {label}
        <If check={required || !!description}>
          <InfoTag {...props} />
        </If>
      </Label>
      <InputField
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={ev => onChange && onChange(ev.target.value)}
      />
    </Container>
  );
};

export default Input;
