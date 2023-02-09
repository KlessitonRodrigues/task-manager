import { BsCalendar3Week, BsFileText, BsViewList } from 'react-icons/bs';
import { HiOutlineFilter, HiPlus, HiSearch, HiViewGrid } from 'react-icons/hi';
import ToolBar from 'src/UI/base/ToolBar';

import { Forms } from '../ToolBarForms';

const TooBarContent = () => {
  return (
    <ToolBar
      navigationButtons={[
        {
          label: 'calendar',
          icon: <BsCalendar3Week />,
          actionButtons: [
            { label: 'add', icon: <HiPlus />, form: <Forms.CalendarAddEvent /> },
            { label: 'search', icon: <HiSearch />, form: <Forms.CalendarSearchEvent /> },
            { label: 'filter', icon: <HiOutlineFilter />, form: <Forms.CalendarFilterEvent /> },
          ],
        },

        {
          label: 'notes',
          icon: <BsFileText />,
          actionButtons: [{ label: 'add', icon: <BsCalendar3Week />, form: <div /> }],
        },

        {
          label: 'board',
          icon: <BsViewList />,
          actionButtons: [{ label: 'add', icon: <BsCalendar3Week />, form: <div /> }],
        },
      ]}
    />
  );
};

export default TooBarContent;
