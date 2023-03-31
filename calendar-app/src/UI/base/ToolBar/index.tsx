import { useEffect, useMemo, useState } from 'react';
import { BsKanban } from 'react-icons/bs';
import { ToolBarLogoIcon } from 'src/UI/base/ToolBarIcon';
import useGlobalContext from 'src/hooks/useGlobalContext';

import {
  renderActionBtns,
  renderFooterBtns,
  renderForm,
  renderNavigationBtns,
} from './services/renderContent';
import { ActionBar, Container, FooterIcons, FormPanel, NavIcons, NavigationBar } from './styled';

const ToolBar = (props: ToolBarProps) => {
  const [global] = useGlobalContext();
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

  useEffect(() => {
    if (global.dispatchPanel) setActive(global.dispatchPanel);
  }, [global.dispatchPanel]);

  return (
    <Container>
      <NavigationBar>
        <ToolBarLogoIcon label="App" variant="logo" icon={<BsKanban />} />
        <NavIcons>{NavigationBtns}</NavIcons>
        <FooterIcons>{FooterBtns}</FooterIcons>
      </NavigationBar>

      <ActionBar>{ActionBtns}</ActionBar>

      <FormPanel>{Form && <Form data={(global.dispatchPanel || {})?.data} />}</FormPanel>
    </Container>
  );
};

export default ToolBar;
