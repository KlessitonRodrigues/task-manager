import { Container, Icon, IconCorner, Label } from './styled';

const ToolBarIcon = (props: ToolBarIconProps) => {
  const { icon, label, variant, active } = props;
  return (
    <Container active={active} variant={variant}>
      <Label>
        <Icon>{icon}</Icon>
        {label}
      </Label>
      <IconCorner />
      <IconCorner />
    </Container>
  );
};

export default ToolBarIcon;
