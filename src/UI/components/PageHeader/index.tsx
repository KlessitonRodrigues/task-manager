import { useCallback, useState } from 'react';
import {
  BsCalendarDate,
  BsClipboardData,
  BsFileEarmarkText,
  BsGear,
  BsKanban,
  BsTag,
} from 'react-icons/bs';
import theme from 'src/styles/theme';
import IconButton from 'src/UI/base/IconButton/index';
import ImageContainer from 'src/UI/base/IconConainer/index';
import Navigation from 'src/UI/base/Navigation/index';
import NavigationTab from 'src/UI/base/NavigationTab/index';
import { Collapse, Container, Expand, RightButtons, Show, Title } from './styled';

type Tabs = 'home' | 'notes' | 'board';

const PageHeader = () => {
  const [currentTab, setTab] = useState<Tabs>('home');
  const handleTabs = useCallback((value: Tabs) => {
    setTab(value);
  }, []);

  return (
    <Container>
      <Collapse>
        <Show>
          <ImageContainer
            icon={<BsKanban fontSize="1.6rem" />}
            color={theme.colors.white}
            size={1}
          />
        </Show>
        <Expand className="expand">
          <Title>Todo App</Title>
        </Expand>
      </Collapse>
      <Navigation>
        <NavigationTab
          icon={<BsCalendarDate fontSize="1.3rem" />}
          value="home"
          label="Home"
          onChange={handleTabs}
          active={currentTab === 'home'}
        />
        <NavigationTab
          icon={<BsFileEarmarkText fontSize="1.3rem" />}
          value="notes"
          label="Notes"
          onChange={handleTabs}
          active={currentTab === 'notes'}
        />
        <NavigationTab
          icon={<BsClipboardData fontSize="1.3rem" />}
          value="board"
          label="Board"
          onChange={handleTabs}
          active={currentTab === 'board'}
        />
      </Navigation>
      <RightButtons>
        <IconButton icon={<BsTag />} />
        <IconButton icon={<BsGear />} />
      </RightButtons>
    </Container>
  );
};

export default PageHeader;
