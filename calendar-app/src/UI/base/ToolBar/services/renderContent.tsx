import ToolBarIcon from '../../ToolBarIcon';

export const renderNavigationBtns = (props: RenderNavigationBtns) => {
  const { navigationButtons, active, onClick } = props;

  return navigationButtons.map(navBtn => (
    <ToolBarIcon
      variant="main"
      key={navBtn.label}
      active={active.nav === navBtn.label}
      icon={navBtn.icon}
      label={navBtn.label}
      onClick={nav => onClick({ nav, action: '' })}
    />
  ));
};

export const renderFooterBtns = (props: RenderNavigationBtns) => {
  const { footerButtons, active, onClick } = props;

  return footerButtons.map(navBtn => (
    <ToolBarIcon
      variant="main"
      key={navBtn.label}
      active={active.nav === navBtn.label}
      icon={navBtn.icon}
      label={navBtn.label}
      onClick={nav => onClick({ nav, action: '' })}
    />
  ));
};

export const renderActionBtns = (props: RenderNavigationBtns) => {
  const { navigationButtons, footerButtons, active, onClick } = props;
  const buttons = [...navigationButtons, ...footerButtons];
  const navBtn = buttons.find(navBtn => navBtn.label === active.nav);

  return navBtn?.actionButtons?.map(actionBtn => {
    const isDisabled = active.action != '' && active.action !== actionBtn.label;

    return (
      <ToolBarIcon
        variant="subIcon"
        key={`${navBtn.label} ${actionBtn.label}`}
        icon={actionBtn.icon}
        label={actionBtn.label}
        disable={isDisabled}
        onClick={label => {
          const action = label === active.action ? '' : label;
          !isDisabled && onClick({ ...active, action });
        }}
      />
    );
  });
};

export const renderForm = (props: RenderNavigationBtns) => {
  const { navigationButtons, footerButtons, active } = props;
  const buttons = [...navigationButtons, ...footerButtons];
  const nav = buttons.find(navBtn => navBtn.label === active.nav);
  const action = nav.actionButtons.find(actionsBtn => actionsBtn.label === active.action);

  return action?.form || false;
};
