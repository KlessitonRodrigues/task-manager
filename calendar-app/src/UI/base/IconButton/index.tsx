import { Container } from './styled';

const IconButton = (props: IconButtonProps) => (
  <Container variant={props.variant} onClick={() => props.onClick && props.onClick()}>
    {props.icon}
  </Container>
);

export default IconButton;
