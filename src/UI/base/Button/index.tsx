import { Container } from './styled';

interface Props {
  label: string;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  p?: string;
  onClick?: () => void;
}

const Button = (props: Props) => (
  <Container padding={props.p} onClick={() => props.onClick && props.onClick()}>
    {props.iconLeft}
    {props.label}
    {props.iconRight}
  </Container>
);

export default Button;
