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

import AddEventForm from '../NavigationBarPanels/AddEvent';
import SettingsForm from '../NavigationBarPanels/Settings';

const NavigationBarContent = () => {
  const [active, setActive] = useState<NavigationBarProps['active']>({
    nav: 'home',
    action: '',
  });

  return (
    <NavigationBar
      active={active}
      onChangeNav={nav => setActive({ ...active, nav, action: '' })}
      onChangeAction={action => setActive({ ...active, action })}
      onClosePanel={() => setActive({ ...active, action: '' })}
      navigation={[
        { label: 'home', icon: <BsCalendar3 /> },
        { label: 'events', icon: <BsChat /> },
        { label: 'board', icon: <BsBarChart /> },
        { label: 'notes', icon: <BsBook /> },
      ]}
      actions={[
        {
          nav: 'home',
          label: 'add',
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
          label: 'Add event',
          nav: 'home',
          action: 'add',
          icon: <BsPlusLg />,
          render: <AddEventForm />,
        },
        {
          label: 'Edit event',
          nav: 'home',
          action: 'edit',
          icon: <BsPencil />,
          render: <div>TEST 2</div>,
        },
        {
          label: 'Search event',
          nav: 'home',
          action: 'search',
          icon: <BsSearch />,
          render: <div>TEST 3</div>,
        },
        {
          label: 'Settings',
          nav: 'Settings',
          action: '',
          icon: <BsGear />,
          render: <SettingsForm />,
        },
      ]}
      footer={[{ label: 'Settings', icon: <BsGear /> }]}
    />
  );
};

export default NavigationBarContent;
