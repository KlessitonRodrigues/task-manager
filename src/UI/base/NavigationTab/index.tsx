import ImageContainer from '../IconConainer/index';
import { Container, IconContainer } from './styled';

interface Props {
  icon?: React.ReactElement;
  label: string;
  value: string;
  currentIndex: number;
  index: number;
}

const NavigationTab = (props: Props) => (
  <Container className="active">
    <IconContainer>{props.icon}</IconContainer>&nbsp;{props.label}
  </Container>
);

export default NavigationTab;
