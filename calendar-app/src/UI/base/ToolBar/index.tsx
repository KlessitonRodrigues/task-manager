import { useMemo, useState } from 'react';
import { BsKanban } from 'react-icons/bs';
import ToolBarIcon from 'src/UI/base/ToolBarIcon';

import { renderActionBtns, renderForm, renderNavigationBtns } from './services/renderContent';
import { ActionBar, Container, FormPanel, NavigationBar } from './styled';

const ToolBar = (props: ToolBarProps) => {
  const { navigationButtons } = props;
  const [active, setActive] = useState({ nav: 'calendar', action: '' });
  const renderProps: RenderNavigationBtns = {
    navigationButtons,
    active,
    onClick: setActive,
  };
  const NavigationBtns = useMemo(() => renderNavigationBtns(renderProps), [active.nav]);
  const ActionBtns = useMemo(() => renderActionBtns(renderProps), [active]);
  const Form = useMemo(() => renderForm(renderProps), [active.action]);

  return (
    <Container>
      <NavigationBar>
        <ToolBarIcon label="App" variant="logo" icon={<BsKanban />} />
        {NavigationBtns}
      </NavigationBar>

      <ActionBar>{ActionBtns}</ActionBar>

      <FormPanel>{Form}</FormPanel>
    </Container>
  );
};

export default ToolBar;
