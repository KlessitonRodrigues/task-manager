import { Collapse, Container, Expand, Show, Title } from './styled';
import { BsCalendarDate, BsClipboardData, BsFileEarmarkText, BsListUl } from 'react-icons/bs';
import ImageContainer from '@UI/base/IconConainer/index';
import theme from '@styles/theme';
import Navigation from '@UI/base/Navigation/index';
import NavigationTab from '@UI/base/NavigationTab/index';

const PageHeader = () => (
  <Container>
    <Collapse>
      <Show>
        <ImageContainer icon={<BsListUl />} color={theme.colors.white} size={10} />
      </Show>
      <Expand className="expand">
        <Title>Todo App</Title>
      </Expand>
    </Collapse>
    <Navigation>
      <NavigationTab
        icon={<BsCalendarDate fontSize="1.2rem" />}
        value="home"
        label="Home"
        index={0}
        currentIndex={0}
      />
      <NavigationTab
        icon={<BsFileEarmarkText fontSize="1.2rem" />}
        value="notes"
        label="Notes"
        index={1}
        currentIndex={0}
      />
      <NavigationTab
        icon={<BsClipboardData fontSize="1.2rem" />}
        value="board"
        label="Board"
        index={2}
        currentIndex={0}
      />
      <NavigationTab value="config" label="Config" index={3} currentIndex={0} />
    </Navigation>
  </Container>
);

export default PageHeader;
