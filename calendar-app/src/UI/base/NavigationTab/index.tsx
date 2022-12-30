import { Border, BorderBackground, IconContainer, Tab } from './styled';

const NavigationTab = (props: NavigationTabProps) => {
  const { label, value, active, icon, onChange } = props;
  const activeClass = active ? 'active' : '';

  return (
    <>
      <BorderBackground className={activeClass}>
        <Border left />
      </BorderBackground>
      <Tab className={activeClass} onClick={() => onChange && onChange(value)}>
        <IconContainer>{icon}</IconContainer>&nbsp;{label}
      </Tab>
      <BorderBackground className={activeClass}>
        <Border />
      </BorderBackground>
    </>
  );
};

export default NavigationTab;
