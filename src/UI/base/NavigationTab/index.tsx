import { Container, IconContainer } from './styled';

interface Props {
  icon?: React.ReactElement;
  label: string;
  value: string;
  active?: boolean;
  onChange?: (value: string) => void;
}

const NavigationTab = ({ label, value, active, icon, onChange }: Props) => {
  return (
    <Container className={active && 'active'} onClick={() => onChange && onChange(value)}>
      <IconContainer>{icon}</IconContainer>&nbsp;{label}
    </Container>
  );
};

export default NavigationTab;
