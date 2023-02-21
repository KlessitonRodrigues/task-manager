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
  month: number;
  day: number;
  selectedMonth: number;
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
  calendarEvent?: CalendarEvent;
  onClick?: (calendarEvent: CalendarEvent) => void;
};

type CardProps = {
  bgColor?: string;
  children: React.ReactNode;
};

type CheckboxPanelProps = {
  label?: string;
  values?: string[];
  options?: { value: string; icon?: React.ReactElement; checkedIcon?: React.ReactElement }[];
  onChangeOne?: (value: string) => void;
  onChangeAll?: (value: string[]) => void;
  iconFormat?: 'square' | 'circle';
  iconFontSize?: string;
};

type IconButtonProps = {
  icon: React.ReactElement;
  className?: string;
  onClick?: () => void;
  variant?: 'solid' | 'outiline';
};

type IconContainerProps = {
  color?: string;
  size?: number;
  icon: React.ReactElement;
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

type TimeProps = {
  update?: boolean;
  startTime?: number;
  endTime?: number;
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

type CalendarProps = {
  currentDate: string;
  changeMonth: (newDate: string) => void;
};

type CalendarHeaderProps = {
  currentDate: string;
  changeMonth: (newDate: string) => void;
};

type NavigationTabProps = {
  icon?: React.ReactElement;
  label: string;
  value: string;
  active?: boolean;
  onChange?: (value: string) => void;
};

type SidePanelProps = {
  show?: boolean;
  children?: React.ReactNode;
};

type FormContentProps = {
  label?: string;
  noLine?: boolean;
  expanded?: boolean;
  onExpand?: (label: string) => void;
  children?: React.ReactNode;
};

type FormTitleProps = {
  label?: string;
  icon?: React.ReactElement;
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
  changeWeek?: (index: number) => void;
};

type ToolBarProps = {
  navigationButtons: {
    icon: React.ReactElement;
    label: string;
    actionButtons: {
      icon: React.ReactElement;
      label: string;
      form: React.ReactElement;
    }[];
  }[];
  footerButtons: {
    icon: React.ReactElement;
    label: string;
    actionButtons: {
      icon: React.ReactElement;
      label: string;
      form: React.ReactElement;
    }[];
  }[];
};

type RenderNavigationBtns = {
  navigationButtons: ToolBarProps['navigationButtons'];
  footerButtons: ToolBarProps['navigationButtons'];
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
