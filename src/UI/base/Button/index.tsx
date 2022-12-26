import { Container, Icon, Label } from './styled';

const Button = (props: ButtonProps) => {
  const { label, iconLeft, iconRight, onClick, p, variant } = props;

  return (
    <Container padding={p} variant={variant} onClick={() => onClick && onClick()}>
      <Icon>{iconLeft}</Icon>
      <Label>{label}</Label>
      <Icon>{iconRight}</Icon>
    </Container>
  );
};

export default Button;
