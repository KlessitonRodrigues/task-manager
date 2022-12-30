import { Container, Content, Label } from './styled';

const SidePanelSection = (props: SidePanelSectionProps) => {
  const { label, children } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <Content>{children}</Content>
    </Container>
  );
};

export default SidePanelSection;
