import { Border, BorderBackground, Container, IconContainer, Tab } from './styled';

const NavigationTab = (props: NavigationTabProps) => {
  const { label, value, active, icon, onChange } = props;

  return (
    <Container>
      <BorderBackground active={active}>
        <Border left />
      </BorderBackground>
      <Tab active={active} onClick={() => onChange && onChange(value)}>
        <IconContainer>{icon}</IconContainer>&nbsp;{label}
      </Tab>
      <BorderBackground active={active}>
        <Border />
      </BorderBackground>
    </Container>
  );
};

export default NavigationTab;
