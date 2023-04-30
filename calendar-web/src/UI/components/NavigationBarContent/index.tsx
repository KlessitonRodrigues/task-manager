import { useState } from 'react';
import {
  BsBarChart,
  BsBook,
  BsCalendar3,
  BsChat,
  BsPencil,
  BsPlusLg,
  BsSearch,
} from 'react-icons/bs';
import NavigationBar from 'src/UI/base/NavigationBar';

const NavigationBarContent = () => {
  const [active, setActive] = useState<NavigationBarProps['active']>({
    nav: 'home',
    action: '',
    panel: '',
  });

  return (
    <NavigationBar
      active={active}
      onNavChange={nav => setActive({ ...active, nav })}
      onActionChange={action => setActive({ ...active, action })}
      onPanelChange={panel => setActive({ ...active, panel })}
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
          label: 'create',
          nav: 'home',
          action: 'create',
          render: () => <div>TEST</div>,
        },
      ]}
      footerButtons={[]}
    />
  );
};

export default NavigationBarContent;
