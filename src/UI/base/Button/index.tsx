import { Container, Icon, Label } from './styled';

interface Props {
  label: string;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  p?: string;
  variant?: 'outline' | 'iconButton';
  onClick?: () => void;
}

const Button = (props: Props) => (
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
