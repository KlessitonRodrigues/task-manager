import { useMemo, useState } from 'react';
import { BsKanban } from 'react-icons/bs';
import ToolBarIcon from 'src/UI/base/ToolBarIcon';

import {
  renderActionBtns,
  renderFooterBtns,
  renderForm,
  renderNavigationBtns,
} from './services/renderContent';
import { ActionBar, Container, FooterIcons, FormPanel, NavIcons, NavigationBar } from './styled';

const ToolBar = (props: ToolBarProps) => {
  const [active, setActive] = useState({ nav: 'calendar', action: '' });

  const renderProps: RenderNavigationBtns = {
    ...props,
    active,
    onClick: setActive,
  };

  const NavigationBtns = useMemo(() => renderNavigationBtns(renderProps), [active.nav]);
  const FooterBtns = useMemo(() => renderFooterBtns(renderProps), [active.nav]);
  const ActionBtns = useMemo(() => renderActionBtns(renderProps), [active]);
  const Form = useMemo(() => renderForm(renderProps), [active.action]);

  return (
    <Container>
      <NavigationBar>
        <ToolBarIcon label="App" variant="logo" icon={<BsKanban />} />
        <NavIcons>{NavigationBtns}</NavIcons>
        <FooterIcons>{FooterBtns}</FooterIcons>
      </NavigationBar>

      <ActionBar>{ActionBtns}</ActionBar>

      <FormPanel>{Form}</FormPanel>
    </Container>
  );
};

export default ToolBar;
