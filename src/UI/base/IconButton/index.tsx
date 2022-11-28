import { Container } from './styled';

interface Props {
  icon: React.ReactElement;
  onClick?: () => void;
  variant?: 'solid' | 'outiline';
}

const IconButton = (props: Props) => (
  <Container variant={props.variant} onClick={() => props.onClick && props.onClick()}>
    {props.icon}
  </Container>
);

export default IconButton;
