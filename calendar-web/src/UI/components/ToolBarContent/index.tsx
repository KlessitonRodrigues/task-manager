import { BsCalendar3Week, BsFileText, BsGear, BsViewList } from 'react-icons/bs';
import { HiOutlineFilter, HiPencil, HiPlus, HiSearch } from 'react-icons/hi';
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
            { label: 'add', icon: <HiPlus />, form: Forms.CalendarAddEvent },
            { label: 'search', icon: <HiSearch />, form: Forms.CalendarSearchEvent },
            { label: 'filter', icon: <HiOutlineFilter />, form: Forms.CalendarFilterEvent },
            { label: 'edit', icon: <HiPencil />, form: Forms.CalendarEditEvent },
          ],
        },

        {
          label: 'notes',
          icon: <BsFileText />,
          actionButtons: [{ label: 'add', icon: <BsCalendar3Week />, form: () => <div /> }],
        },

        {
          label: 'board',
          icon: <BsViewList />,
          actionButtons: [{ label: 'add', icon: <BsCalendar3Week />, form: () => <div /> }],
        },
      ]}
      footerButtons={[
        {
          label: 'settings',
          icon: <BsGear />,
          form: Forms.SettingsForm,
        },
      ]}
    />
  );
};

export default TooBarContent;
