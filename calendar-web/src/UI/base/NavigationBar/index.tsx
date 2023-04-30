import { RenderActionButtons, RenderNavigationButtons, RenderPanels } from './services/render';
import { Container } from './styled';

const NavigationBar = (props: NavigationBarProps) => {
  const navigationBar = RenderNavigationButtons(props);
  const actionsBar = RenderActionButtons(props);
  const panel = RenderPanels(props);

  return (
    <Container>
      {navigationBar}
      {actionsBar}
      {panel}
    </Container>
  );
};

export default NavigationBar;
