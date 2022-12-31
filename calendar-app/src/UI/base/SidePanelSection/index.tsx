import { Container, Content, Label } from './styled';

const SidePanelSection = (props: SidePanelSectionProps) => {
  const { label, noLine, children } = props;

  return (
    <Container>
      <Label noLine={noLine}>{label}</Label>
      <Content>{children}</Content>
    </Container>
  );
};

export default SidePanelSection;
