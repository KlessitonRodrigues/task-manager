import { Container } from './styled';

const SidePanel = (props: SidePanelProps) => {
  const { children, show } = props;

  return <Container show={show}>{children}</Container>;
};

export default SidePanel;
