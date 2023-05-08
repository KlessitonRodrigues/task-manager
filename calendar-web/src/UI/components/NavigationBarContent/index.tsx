import { useState } from 'react';
import {
  BsBarChart,
  BsBook,
  BsCalendar3,
  BsChat,
  BsGear,
  BsPencil,
  BsPlusLg,
  BsSearch,
} from 'react-icons/bs';
import NavigationBar from 'src/UI/base/NavigationBar';

import SettingsForm from '../ToolBarForms/Settings';

const NavigationBarContent = () => {
  const [active, setActive] = useState<NavigationBarProps['active']>({
    nav: 'home',
    action: '',
  });

  return (
    <NavigationBar
      active={active}
      onNavChange={nav => setActive({ ...active, nav, action: '' })}
      onActionChange={action => setActive({ ...active, action })}
      onClosePanelChange={() => setActive({ ...active, action: '' })}
      navigation={[
        { label: 'home', icon: <BsCalendar3 /> },
        { label: 'events', icon: <BsChat /> },
        { label: 'board', icon: <BsBarChart /> },
        { label: 'notes', icon: <BsBook /> },
      ]}
      actions={[
        {
          nav: 'home',
          label: 'create',
          icon: <BsPlusLg />,
        },
        {
          nav: 'home',
          label: 'edit',
          icon: <BsPencil />,
        },
        {
          nav: 'home',
          label: 'search',
          icon: <BsSearch />,
        },
      ]}
      panels={[
        {
          label: 'Create event',
          nav: 'home',
          action: 'create',
          render: () => <div>TEST</div>,
        },
        {
          label: 'Edit event',
          nav: 'home',
          action: 'edit',
          render: () => <div>TEST 2</div>,
        },
        {
          label: 'Search event',
          nav: 'home',
          action: 'search',
          render: () => <div>TEST 3</div>,
        },
        {
          label: 'Settings',
          nav: 'Settings',
          action: '',
          render: SettingsForm,
        },
      ]}
      footer={[{ label: 'Settings', icon: <BsGear /> }]}
    />
  );
};

export default NavigationBarContent;
