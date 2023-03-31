import { ToolBarFormIcon, ToolBarMainIcon } from '../../ToolBarIcon';

export const renderNavigationBtns = (props: RenderNavigationBtns) => {
  const { navigationButtons, active, onClick } = props;
  return navigationButtons.map(navBtn => (
    <ToolBarMainIcon
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
    <ToolBarMainIcon
      variant="main"
      key={navBtn.label}
      active={active.nav === navBtn.label}
      icon={navBtn.icon}
      label={navBtn.label}
      onClick={nav => onClick({ nav, action: 'FOOTER_FORM' })}
    />
  ));
};

export const renderActionBtns = (props: RenderNavigationBtns) => {
  const { navigationButtons, active, onClick } = props;

  if (active.action === 'FOOTER_FORM') return false;

  const navBtn = navigationButtons.find(navBtn => navBtn.label === active.nav);
  return navBtn?.actionButtons?.map(actionBtn => {
    const isDisabled = active.action != '' && active.action !== actionBtn.label;
    return (
      <ToolBarFormIcon
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

  if (active.action === 'FOOTER_FORM')
    return footerButtons.find(navBtn => navBtn.label === active.nav)?.form;

  const nav = navigationButtons.find(navBtn => navBtn.label === active.nav);
  const action = nav.actionButtons.find(actionsBtn => actionsBtn.label === active.action);
  return action?.form || false;
};
