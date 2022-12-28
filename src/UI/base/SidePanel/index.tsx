import { Container, SidePanelContainer } from './styled';

const SidePanel = (props: SidePanelProps) => {
  const { children, show } = props;

  return (
    <Container show={show}>
      <SidePanelContainer show={show}>{children}</SidePanelContainer>
    </Container>
  );
};

export default SidePanel;
