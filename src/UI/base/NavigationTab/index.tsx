import { Container, IconContainer } from './styled';

const NavigationTab = (props: NavigationTabProps) => {
  const { label, value, active, icon, onChange } = props;

  return (
    <Container className={active && 'active'} onClick={() => onChange && onChange(value)}>
      <IconContainer>{icon}</IconContainer>&nbsp;{label}
    </Container>
  );
};

export default NavigationTab;
