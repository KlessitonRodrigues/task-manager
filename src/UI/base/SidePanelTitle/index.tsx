import { Container } from './styled';

interface Props {
  label?: string;
  icon?: React.ReactElement;
}

const SidePanelTitle = (props: Props) => (
  <Container>
    {props.icon} {props.label}
  </Container>
);

export default SidePanelTitle;
