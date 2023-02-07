import { BsBook, BsCalendar3, BsFilter, BsKanban, BsPlusLg, BsSearch } from 'react-icons/bs';
import ToolBarIcon from 'src/UI/base/ToolBarIcon';

import { ActionBar, Container, NavigationBar } from './styled';

const ToolBar = (props: ToolBarProps) => {
  const { buttons } = props;
  return (
    <Container>
      <NavigationBar>
        <ToolBarIcon label="App" variant="logo" icon={<BsKanban />} />
        <ToolBarIcon active label="Calendar" variant="main" icon={<BsCalendar3 />} />
        <ToolBarIcon label="Calendar" variant="main" icon={<BsCalendar3 />} />
        <ToolBarIcon label="Calendar" variant="main" icon={<BsCalendar3 />} />
        <ToolBarIcon label="Calendar" variant="main" icon={<BsCalendar3 />} />
        <ToolBarIcon label="Calendar" variant="main" icon={<BsCalendar3 />} />
        <ToolBarIcon label="Calendar" variant="main" icon={<BsCalendar3 />} />
      </NavigationBar>

      <ActionBar>
        <ToolBarIcon label="Add" variant="subIcon" icon={<BsPlusLg />} />
        <ToolBarIcon label="Search" variant="subIcon" icon={<BsSearch />} />
        <ToolBarIcon label="Filter" variant="subIcon" icon={<BsFilter />} />
      </ActionBar>
    </Container>
  );
};

export default ToolBar;
