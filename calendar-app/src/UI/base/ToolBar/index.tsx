import { BsCalendar4Week, BsKanban } from 'react-icons/bs';
import { HiOutlineFilter, HiPlus, HiSearch, HiViewGrid } from 'react-icons/hi';
import ToolBarIcon from 'src/UI/base/ToolBarIcon';

import { ActionBar, Container, NavigationBar, Panel } from './styled';

const ToolBar = (props: ToolBarProps) => {
  const { buttons } = props;
  return (
    <Container>
      <NavigationBar>
        <ToolBarIcon label="App" variant="logo" icon={<BsKanban />} />
        <ToolBarIcon active label="Calendar" variant="main" icon={<BsCalendar4Week />} />
        <ToolBarIcon label="Calendar" variant="main" icon={<BsCalendar4Week />} />
        <ToolBarIcon label="Calendar" variant="main" icon={<BsCalendar4Week />} />
        <ToolBarIcon label="Calendar" variant="main" icon={<BsCalendar4Week />} />
        <ToolBarIcon label="Calendar" variant="main" icon={<BsCalendar4Week />} />
        <ToolBarIcon label="Calendar" variant="main" icon={<BsCalendar4Week />} />
      </NavigationBar>

      <ActionBar>
        <ToolBarIcon label="Add" variant="subIcon" icon={<HiPlus />} />
        <ToolBarIcon label="Search" variant="subIcon" icon={<HiSearch />} />
        <ToolBarIcon label="Filter" variant="subIcon" icon={<HiOutlineFilter />} />
        <ToolBarIcon label="Layout" variant="subIcon" icon={<HiViewGrid />} />
      </ActionBar>

      {
        //<Panel>FORM</Panel>
      }
    </Container>
  );
};

export default ToolBar;
