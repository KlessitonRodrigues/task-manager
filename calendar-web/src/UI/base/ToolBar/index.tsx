import { useEffect, useMemo, useState } from 'react';
import { BsKanban } from 'react-icons/bs';
import { ToolBarLogoIcon } from 'src/UI/base/ToolBarIcon';
import useActionDispatch from 'src/hooks/useActionDispatch';

import {
  renderActionBtns,
  renderFooterBtns,
  renderForm,
  renderNavigationBtns,
} from './services/renderContent';
import { ActionBar, Container, FooterIcons, FormPanel, NavIcons, NavigationBar } from './styled';

const ToolBar = (props: ToolBarProps) => {
  const [dispatch] = useActionDispatch();
  const [active, setActive] = useState<ToolBarActiveTab>({ tab: '', panel: '' });

  const renderProps: RenderNavigationBtns = {
    ...props,
    active,
    setActive: setActive,
  };

  const NavigationBtns = useMemo(() => renderNavigationBtns(renderProps), [active.tab]);
  const FooterBtns = useMemo(() => renderFooterBtns(renderProps), [active.tab]);
  const ActionBtns = useMemo(() => renderActionBtns(renderProps), [active]);
  const Form = useMemo(() => renderForm(renderProps), [active.panel]);

  useEffect(() => {
    const { to, type } = dispatch.action;
    if (to === 'EDIT_PANEL' && type === 'EDIT') setActive({ tab: 'CALENDAR', panel: 'EDIT' });
  }, [dispatch.action]);

  return (
    <Container>
      <NavigationBar>
        <ToolBarLogoIcon label="App" variant="logo" icon={<BsKanban />} />
        <NavIcons>{NavigationBtns}</NavIcons>
        <FooterIcons>{FooterBtns}</FooterIcons>
      </NavigationBar>

      <ActionBar>{ActionBtns}</ActionBar>

      <FormPanel>{Form && <Form data={(dispatch.action || {})?.data} />}</FormPanel>
    </Container>
  );
};

export default ToolBar;
