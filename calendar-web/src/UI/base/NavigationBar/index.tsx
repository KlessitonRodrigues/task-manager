import { useMemo } from 'react';

import { RenderActionButtons, RenderNavigationButtons, RenderPanels } from './services/render';
import { Container } from './styled';

const NavigationBar = (props: NavigationBarProps) => {
  const { active } = props;
  const { nav, action } = active;

  const navigationBar = useMemo(() => RenderNavigationButtons(props), [nav]);
  const actionsBar = useMemo(() => RenderActionButtons(props), [nav, action]);
  const panel = useMemo(() => RenderPanels(props), [nav, action]);

  return (
    <Container>
      {navigationBar}
      {actionsBar}
      {panel}
    </Container>
  );
};

export default NavigationBar;
