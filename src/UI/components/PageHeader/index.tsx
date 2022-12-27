import {
  BsCalendar4Week,
  BsClipboardData,
  BsFileEarmarkText,
  BsGear,
  BsKanban,
  BsTag,
} from 'react-icons/bs';
import IconButton from 'src/UI/base/IconButton/index';
import ImageContainer from 'src/UI/base/IconConainer/index';
import Navigation from 'src/UI/base/Navigation/index';
import NavigationTab from 'src/UI/base/NavigationTab/index';
import useGlobalContext from 'src/hooks/useGlobalContext/index';
import theme from 'src/styles/theme';

import { Collapse, Container, Expand, RightButtons, Show, Title } from './styled';

const PageHeader = () => {
  const [global, setGlobal] = useGlobalContext();

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
          icon={<BsCalendar4Week fontSize="1.3rem" />}
          value="/"
          label="Calendar"
          onChange={location => setGlobal({ ...global, location })}
          active={global.location === '/'}
        />
        <NavigationTab
          icon={<BsFileEarmarkText fontSize="1.3rem" />}
          value="/notes"
          label="Notes"
          onChange={location => setGlobal({ ...global, location })}
          active={global.location === '/notes'}
        />
        <NavigationTab
          icon={<BsClipboardData fontSize="1.3rem" />}
          value="/board"
          label="Board"
          onChange={location => setGlobal({ ...global, location })}
          active={global.location === '/board'}
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
