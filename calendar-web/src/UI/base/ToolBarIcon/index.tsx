import {
  FormIcon,
  FormIconContainer,
  FormIconLabel,
  LogoIcon,
  LogoIconContainer,
  LogoIconLabel,
  NavIcon,
  NavIconContainer,
  NavIconLabel,
} from './styled';

export const ToolBarMainIcon = (props: ToolBarIconProps) => {
  const { icon, label, active, onClick } = props;

  return (
    <NavIconContainer onClick={() => onClick(label)} act={active}>
      <NavIcon>{icon}</NavIcon>
      <NavIconLabel>{label}</NavIconLabel>
    </NavIconContainer>
  );
};

export const ToolBarFormIcon = (props: ToolBarIconProps) => {
  const { icon, label, active, onClick } = props;

  return (
    <FormIconContainer onClick={() => onClick(label)} act={active}>
      <FormIcon>{icon}</FormIcon>
      <FormIconLabel>{label}</FormIconLabel>
    </FormIconContainer>
  );
};

export const ToolBarLogoIcon = (props: ToolBarIconProps) => {
  const { icon, label, onClick } = props;

  return (
    <LogoIconContainer onClick={() => onClick(label)}>
      <LogoIcon>{icon}</LogoIcon>
      <LogoIconLabel>{label}</LogoIconLabel>
    </LogoIconContainer>
  );
};
