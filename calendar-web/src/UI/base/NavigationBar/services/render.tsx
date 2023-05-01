import { useEffect } from 'react';
import { BsXLg } from 'react-icons/bs';
import useAnimateClass from 'src/hooks/useAnimationRef';

import {
  ActionContainer,
  ActionIcon,
  ActionItem,
  ActionLabel,
  NavigationContainer,
  NavigationDivisor,
  NavigationIcon,
  NavigationItem,
  NavigationLabel,
  Panel,
  PanelCloseBtn,
  PanelContainer,
  PanelHeader,
  PanelTitle,
} from '../styled';

export const RenderNavigationButtons = (props: NavigationBarProps) => {
  return (
    <NavigationContainer>
      {props.navigation.map(nav => (
        <NavigationItem
          active={nav.label === props.active.nav}
          onClick={() => props.onNavChange(nav.label)}
        >
          <NavigationIcon>{nav.icon}</NavigationIcon>
          <NavigationLabel>{nav.label}</NavigationLabel>
        </NavigationItem>
      ))}

      <NavigationDivisor />

      {props.footer.map(nav => (
        <NavigationItem
          active={nav.label === props.active.nav}
          onClick={() => props.onNavChange(nav.label)}
        >
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
      {props.actions
        .filter(a => a.nav === props.active.nav)
        .map(action => (
          <ActionItem
            active={action.label === props.active.action}
            onClick={() => props.onActionChange(action.label)}
          >
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
  const animate = useAnimateClass();

  useEffect(() => {
    animate.addAnimtateIn();
    return () => animate.addAnimtateOut();
  }, [action]);

  if (!panel) return false;

  return (
    <PanelContainer active={!!panel} ref={animate.getReactRef}>
      <Panel>
        <PanelHeader>
          <PanelTitle>{panel.label}</PanelTitle>
          <PanelCloseBtn onClick={() => props.onClosePanelChange()}>
            <BsXLg />
          </PanelCloseBtn>
        </PanelHeader>
        {panel.render()}
      </Panel>
    </PanelContainer>
  );
};
