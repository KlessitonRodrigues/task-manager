import { Container } from './styled';

const IconButton = (props: IconButtonProps) => (
  <Container
    className={`icon ${props.className}`}
    variant={props.variant}
    onClick={() => props.onClick && props.onClick()}
  >
    {props.icon}
  </Container>
);

export default IconButton;
