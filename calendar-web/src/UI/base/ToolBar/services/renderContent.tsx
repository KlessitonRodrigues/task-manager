import { ToolBarFormIcon, ToolBarMainIcon } from '../../ToolBarIcon';

export const renderNavigationBtns = (props: RenderNavigationBtns) => {
  const { navigationButtons, active, setActive } = props;

  return navigationButtons.map(navBtn => (
    <ToolBarMainIcon
      variant="main"
      key={navBtn.label}
      active={active.tab === navBtn.label}
      icon={navBtn.icon}
      label={navBtn.label}
      onClick={tab => setActive({ tab, panel: '' })}
    />
  ));
};

export const renderFooterBtns = (props: RenderNavigationBtns) => {
  const { footerButtons, active, setActive } = props;

  return footerButtons.map(navBtn => (
    <ToolBarMainIcon
      variant="main"
      key={navBtn.label}
      active={active.tab === navBtn.label}
      icon={navBtn.icon}
      label={navBtn.label}
      onClick={tab => setActive({ tab, panel: '' })}
    />
  ));
};

export const renderActionBtns = (props: RenderNavigationBtns) => {
  const { navigationButtons, active, setActive } = props;

  if (active.tab === '') return false;

  const navBtn = navigationButtons.find(navBtn => navBtn.label === active.nav);
  return navBtn?.actionButtons?.map(actionBtn => {
    const isDisabled = active.tab != '' && active.panel !== actionBtn.label;
    return (
      <ToolBarFormIcon
        variant="subIcon"
        key={`${navBtn.label} ${actionBtn.label}`}
        icon={actionBtn.icon}
        label={actionBtn.label}
        disable={isDisabled}
        onClick={label => {
          const action = label === active.tab ? '' : label;
          !isDisabled && setActive({ ...active, action });
        }}
      />
    );
  });
};

export const renderForm = (props: RenderNavigationBtns) => {
  const { navigationButtons, footerButtons, active } = props;

  if (active.tab === 'SETTINGS')
    return footerButtons.find(navBtn => navBtn.label === active.panel)?.form;

  const nav = navigationButtons.find(navBtn => navBtn.label === active.panel);
  const action = nav.actionButtons.find(actionsBtn => actionsBtn.label === active.panel);
  return action?.form || false;
};
