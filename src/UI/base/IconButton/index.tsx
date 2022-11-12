import { Container } from './styled';

interface Props {
  icon: React.ReactElement;
  onClick?: () => void;
}

const IconButton = (props: Props) => (
  <Container onClick={() => props.onClick && props.onClick()}>{props.icon}</Container>
);

export default IconButton;
