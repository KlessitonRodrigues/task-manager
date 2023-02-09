import { Container, Icon, Label, RoundedCorner, RoundedCornerBg } from './styled';

const ToolBarIcon = (props: ToolBarIconProps) => {
  const { icon, label, variant, active, onClick } = props;
  return (
    <>
      <RoundedCornerBg>
        <RoundedCorner top active={active} />
      </RoundedCornerBg>
      <Container
        active={active}
        variant={variant}
        className={`icon-${variant}`}
        onClick={() => onClick(label?.toLowerCase())}
      >
        <Icon>{icon}</Icon>
        <Label>{label}</Label>
      </Container>
      <RoundedCornerBg>
        <RoundedCorner active={active} />
      </RoundedCornerBg>
    </>
  );
};

export default ToolBarIcon;
