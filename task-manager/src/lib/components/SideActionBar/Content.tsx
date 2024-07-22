import {
  BsBarChart,
  BsBook,
  BsCalendar3,
  BsChat,
  BsPencil,
  BsPlusLg,
  BsSearch,
} from 'react-icons/bs';

export const SideBarContent: Props.SideActionContent = {
  paths: [
    { path: 'home', icon: <BsCalendar3 /> },
    { path: 'events', icon: <BsChat /> },
    { path: 'board', icon: <BsBarChart /> },
    { path: 'notes', icon: <BsBook /> },
  ],
  actions: [
    {
      path: 'home',
      label: 'add',
      icon: <BsPlusLg />,
      panel: <div>TEST 2</div>,
    },
    {
      path: 'home',
      label: 'edit',
      icon: <BsPencil />,
      panel: <div>TEST 2</div>,
    },
    {
      path: 'home',
      label: 'search',
      icon: <BsSearch />,
      panel: <div>TEST 2</div>,
    },
  ],
  footer: [
    {
      path: 'home',
      label: 'search',
      icon: <BsSearch />,
      panel: <div>TEST 2</div>,
    },
  ],
};
