import {
  ActionContainer,
  ActionIcon,
  ActionItem,
  ActionLabel,
  NavigationContainer,
  NavigationIcon,
  NavigationItem,
  NavigationLabel,
  Panel,
  PanelContainer,
} from '../styled';

export const RenderNavigationButtons = (props: NavigationBarProps) => {
  return (
    <NavigationContainer>
      {props.navigation.map(nav => (
        <NavigationItem onClick={() => props.onNavChange(nav.label)}>
          <NavigationIcon>{nav.icon}</NavigationIcon>
          <NavigationLabel>{nav.label}</NavigationLabel>
        </NavigationItem>
      ))}
    </NavigationContainer>
  );
};

export const RenderActionButtons = (props: NavigationBarProps) => {
  return (
    <ActionContainer>
      {props.actions.map(action => (
        <ActionItem onClick={() => props.onActionChange(action.label)}>
          <ActionIcon>{action.icon}</ActionIcon>
          <ActionLabel>{action.label}</ActionLabel>
        </ActionItem>
      ))}
    </ActionContainer>
  );
};

export const RenderPanels = (props: NavigationBarProps) => {
  const { nav, action } = props.active;
  const panel = props.panels.find(p => p.nav === nav && p.action === action);

  return (
    <PanelContainer active={!!panel}>
      <Panel>{panel && panel.render()}</Panel>
    </PanelContainer>
  );
};
