import { Container, Icon, Label } from './styled';

const Button = (props: ButtonProps) => (
  <Container
    padding={props.p}
    variant={props.variant}
    onClick={() => props.onClick && props.onClick()}
  >
    <Icon>{props.iconLeft}</Icon>
    <Label>{props.label}</Label>
    <Icon>{props.iconRight}</Icon>
  </Container>
);

export default Button;
