type ButtonProps = {
  label: string;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  p?: string;
  variant?: 'base' | 'outline' | 'solid';
  onClick?: () => void;
};

type CalendarGridProps = {
  monthWeeks: DateInfo[][];
  eventsByWeek: Record<WeekDayName, UserEvent[]>;
  expandedWeek: number;
  onChangeWeek: (index: number) => void;
};

type CalendarDayProps = {
  children?: React.ReactNode;
  month: string;
  day: string;
  selectedMonth: string;
};

type CalendarWeekProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

type IfProps = {
  check: boolean;
  true?: React.ReactElement;
  false?: React.ReactElement;
  children?: React.ReactElement;
};

type CalendarTodoProps = {
  userEvent?: UserEvent;
};

type CheckboxPanelProps = {
  label?: string;
  values?: string[];
  options?: {
    value: string;
    icon?: React.ReactElement;
    checkedIcon?: React.ReactElement;
    color?: 'red' | 'yellow' | 'green';
  }[];
  onChangeOne?: (value: string) => void;
  onChangeAll?: (value: string[]) => void;
  iconFormat?: 'square' | 'circle';
  iconFontSize?: string;
  required?: boolean;
  description?: string;
};

type InputProps = {
  label?: string;
  type?: string;
  value?: string | number;
  placeHolder?: string;
  required?: boolean;
  description?: string;
  onChange?: (value: string) => void;
};

type DisplayProps = {
  label?: string;
  value?: any;
  color?: 'main' | 'none';
  size?: '25%' | '33%' | '50%' | '66%' | '75%' | '100%';
};

type CreateEventPanelProps = {
  show?: boolean;
  onClose?: () => void;
};

type EditEventPanelProps = {
  show?: boolean;
  onClose?: () => void;
  editEvent: CalendarEvent;
};

type CalendarProps = {};

type CalendarHeaderProps = {
  currentDate: string;
  onNext: (date: string) => void;
  onPrev: (date: string) => void;
};

type FormContentProps = {
  label?: string;
  expanded?: boolean;
  onExpand?: (label: string) => void;
  children?: React.ReactNode;
};

type FormTitleProps = {
  label?: string;
  onClose?: () => void;
};

type ColorPickerProps = {
  picker?: boolean;
  bg?: string;
  border?: string;
  selected?: boolean;
  onClick?: (bg: string) => void;
  onPickColor?: (color: string) => void;
};

type RenderCalendarDataProps = {
  currentDate?: string;
  events?: CalendarEvent[];
  onExpandWeek?: (index: number) => void;
};

type NavigationBarProps = {
  active: { nav: string; action: string };
  onChangeNav: (label: string) => void;
  onChangeAction: (label: string) => void;
  onClosePanel: () => void;
  navigation: {
    label: string;
    icon: React.ReactElement;
  }[];
  actions: {
    label: string;
    nav: string;
    icon: React.ReactElement;
  }[];
  panels: {
    label: string;
    nav: string;
    action: string;
    icon: React.ReactElement;
    render: React.ReactElement;
  }[];
  footer: {
    label: string;
    icon: React.ReactElement;
  }[];
};

type ToolBarProps = {
  navigationButtons: {
    icon: React.ReactElement;
    label: string;
    actionButtons: {
      icon: React.ReactElement;
      label: string;
      form: (data?: any) => React.ReactElement;
    }[];
  }[];
  footerButtons: {
    icon: React.ReactElement;
    label: string;
    form: (data?: any) => React.ReactElement;
  }[];
};

type ToolBarActiveTab =
  | { tab: 'CALENDAR'; panel: '' | 'ADD' | 'EDIT' | 'FILTER' | 'SEARCH' }
  | { tab: 'NOTES'; panel: '' }
  | { tab: 'BOARD'; panel: '' }
  | { tab: 'SETTINGS'; panel: '' }
  | { tab: ''; panel: '' };

type RenderNavigationBtns = {
  navigationButtons: ToolBarProps['navigationButtons'];
  footerButtons: ToolBarProps['footerButtons'];
  active: ToolBarActiveTab;
  setActive: (activeTab: ToolBarActiveTab) => void;
};

type ToolBarIconProps = {
  variant: 'logo' | 'main' | 'subIcon';
  icon?: React.ReactElement;
  label?: string;
  active?: boolean;
  disable?: boolean;
  onClick?: (label: ToolBarActiveTab['tab']) => void;
};

type EditEventFormProps = {
  data?: CalendarDayEvent;
};

type TextAreaProps = {
  label?: string;
  placeHolder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

type InfoTagProps = {
  required?: boolean;
  description?: string;
  expandTo?: 'top' | 'right';
};
