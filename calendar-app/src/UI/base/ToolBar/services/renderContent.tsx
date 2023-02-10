import ToolBarIcon from '../../ToolBarIcon';

export const renderNavigationBtns = (props: RenderNavigationBtns) => {
  return props.navigationButtons.map(navBtn => (
    <ToolBarIcon
      variant="main"
      key={navBtn.label}
      active={props.active.nav === navBtn.label}
      icon={navBtn.icon}
      label={navBtn.label}
      onClick={nav => props.onClick({ nav, action: '' })}
    />
  ));
};

export const renderActionBtns = (props: RenderNavigationBtns) => {
  const navBtn = props.navigationButtons.find(navBtn => navBtn.label === props.active.nav);
  return navBtn?.actionButtons?.map(actionBtn => (
    <ToolBarIcon
      variant="subIcon"
      key={`${navBtn.label} ${actionBtn.label}`}
      icon={actionBtn.icon}
      label={actionBtn.label}
      onClick={label => {
        const action = label === props.active.action ? '' : label;
        props.onClick({ ...props.active, action });
      }}
    />
  ));
};

export const renderForm = (props: RenderNavigationBtns) => {
  const nav = props.navigationButtons.find(navBtn => navBtn.label === props.active.nav);
  const action = nav.actionButtons.find(actionsBtn => actionsBtn.label === props.active.action);
  return action?.form || false;
};
