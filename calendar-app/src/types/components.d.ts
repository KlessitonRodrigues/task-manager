type ButtonProps = {
  label: string;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  p?: string;
  variant?: 'base' | 'outline' | 'solid';
  onClick?: () => void;
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
  true: boolean;
  render?: React.ReactElement;
  children?: React.ReactElement;
};

type CalendarTodoProps = {
  calendarEvent?: CalendarDayEvent;
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
};

type InputProps = {
  label?: string;
  type?: string;
  value?: string | number;
  placeHolder?: string;
  onChange?: (value: string) => void;
};

type DisplayProps = {
  label?: string;
  value?: any;
  color?: 'main' | 'none';
  size?: '25%' | '33%' | '50%' | '75%' | '100%';
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

type CalendarHeaderProps = {};

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

type RenderNavigationBtns = {
  navigationButtons: ToolBarProps['navigationButtons'];
  footerButtons: ToolBarProps['footerButtons'];
  active: { nav: string; action: string };
  onClick: (action: { nav: string; action: string }) => void;
};

type ToolBarIconProps = {
  variant: 'logo' | 'main' | 'subIcon';
  icon?: React.ReactElement;
  label?: string;
  active?: boolean;
  disable?: boolean;
  onClick?: (label: string) => void;
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
