type ButtonProps = {
  label: string;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  p?: string;
  variant?: 'outline';
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
  label: string;
  weekIndex: string;
};

type IfProps = {
  when: boolean;
  render: React.ReactElement;
};

type CalendarTodoProps = {
  calendarEvent?: JoinEventAndDate;
  onClick?: (calendarEvent: CalendarEventDate) => void;
};

type CardProps = {
  bgColor?: string;
  children: React.ReactNode;
};

type CheckboxPanelProps = {
  label?: string;
  values?: string[];
  options?: { value: string; icon?: React.ReactElement; checkedIcon?: React.ReactElement }[];
  onChange?: (values: string) => void;
  iconFormat?: 'square' | 'circle';
  iconFontSize?: string;
};

type IconButtonProps = {
  icon: React.ReactElement;
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
};

type CalendarProps = {
  pageState: CalendarPageState;
  setPageState: (state: CalendarPageState) => void;
};

type CalendarHeaderProps = {
  pageState: CalendarPageState;
  setPageState: (state: CalendarPageState) => void;
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

type SidePanelSectionProps = {
  label: string;
  children?: React.ReactNode;
};

type SidePanelTitleProps = {
  label?: string;
  icon?: React.ReactElement;
  onClose?: () => void;
};
