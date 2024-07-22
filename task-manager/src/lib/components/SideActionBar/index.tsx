import { useMemo } from 'react';

import { SideBarContent } from './Content';
import { RenderActionButtons, RenderNavigationButtons, RenderPanels } from './RenderPanels';
import { Container } from './styled';

const NavigationBar = (props: Props.SideActionBar) => {
  const { paths, actions, footer } = SideBarContent;

  const navigationBar = useMemo(() => RenderNavigationButtons(props), [paths]);
  const actionsBar = useMemo(() => RenderActionButtons(props), [paths, actions]);
  const panel = useMemo(() => RenderPanels(props), [paths, footer]);

  return (
    <Container>
      {navigationBar}
      {actionsBar}
      {panel}
    </Container>
  );
};

export default NavigationBar;
