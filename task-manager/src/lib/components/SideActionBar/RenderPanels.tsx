import { BsXLg } from 'react-icons/bs';

import If from 'src/lib/base/If';

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
  PanelIcon,
  PanelTitle,
} from './styled';

export const RenderNavigationButtons = (props: Props.SideActionBar) => {
  return (
    <NavigationContainer>
      {props.content.paths.map(path => (
        <NavigationItem
          key={path.path}
          active={path.path === props.path}
          onClick={() => props.onChangePath(path.path)}
        >
          <NavigationIcon>{path.icon}</NavigationIcon>
          <NavigationLabel>{path.label}</NavigationLabel>
        </NavigationItem>
      ))}

      <NavigationDivisor />

      {props.footer.map(nav => (
        <NavigationItem
          key={nav.label}
          active={nav.label === props.active.nav}
          onClick={() => props.onChangeNav(nav.label)}
        >
          <NavigationIcon>{nav.icon}</NavigationIcon>
          <NavigationLabel>{nav.label}</NavigationLabel>
        </NavigationItem>
      ))}
    </NavigationContainer>
  );
};

export const RenderActionButtons = (props: Props.NavigationBarProps) => {
  return (
    <ActionContainer>
      {props.actions
        .filter(a => a.nav === props.active.nav)
        .map(action => (
          <ActionItem
            key={action.label}
            active={action.label === props.active.action}
            onClick={() => props.onChangeAction(action.label)}
          >
            <ActionIcon>{action.icon}</ActionIcon>
            <ActionLabel>{action.label}</ActionLabel>
          </ActionItem>
        ))}
    </ActionContainer>
  );
};

export const RenderPanels = (props: Props.NavigationBarProps) => {
  const { nav, action } = props.active;
  const panel = props.panels.find(p => p.nav === nav && p.action === action);

  if (!panel) return false;

  return (
    <PanelContainer active={!!panel}>
      <Panel>
        <PanelHeader>
          <PanelTitle>
            <PanelIcon>{panel.icon}</PanelIcon>
            {panel.label}
          </PanelTitle>
          <If check={!!action}>
            <PanelCloseBtn onClick={() => props.onClosePanel()}>
              <BsXLg />
            </PanelCloseBtn>
          </If>
        </PanelHeader>
        {panel.render}
      </Panel>
    </PanelContainer>
  );
};
