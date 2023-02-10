import { Container, Icon, IconContainer, Label, RoundedCorner, RoundedCornerBg } from './styled';

const ToolBarIcon = (props: ToolBarIconProps) => {
  const { icon, label, variant, active, onClick } = props;
  return (
    <Container>
      <RoundedCornerBg>
        <RoundedCorner top active={active} />
      </RoundedCornerBg>
      <IconContainer
        active={active}
        variant={variant}
        className={`icon-${variant}`}
        onClick={() => onClick(label?.toLowerCase())}
      >
        <Icon>{icon}</Icon>
        <Label>{label}</Label>
      </IconContainer>
      <RoundedCornerBg>
        <RoundedCorner active={active} />
      </RoundedCornerBg>
    </Container>
  );
};

export default ToolBarIcon;
