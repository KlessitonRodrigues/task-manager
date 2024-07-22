declare namespace Props {
  type Icons = {
    size?: number;
    onPress?: () => void;
    style?: React.CSSProperties;
    type: Utils.IconTypes;
  };

  type Text = {
    path: string;
    tag?: Utils.TextTags;
  };

  type Loading = {
    show: boolean;
    type: 'fullScreen' | 'icon';
    title?: string;
    description?: string;
  };

  type If = {
    check: boolean;
    true?: React.ReactElement;
    false?: React.ReactElement;
    children?: React.ReactElement;
  };

  type SideActionContent = {
    paths: { path: string; label: string; icon: React.ReactElement }[];
    actions: {
      path: string;
      label: string;
      icon: React.ReactElement;
      panel: React.ReactElement;
    }[];
    footer: {
      path: string;
      label: string;
      icon: React.ReactElement;
      panel: React.ReactElement;
    }[];
  };

  type SideActionBar = {
    content: SideActionContent;
    path: string;
    action: string;
    onChangePath: (path: string) => void;
    onChangeAction: (path: string) => void;
  };
}
