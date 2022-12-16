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
  taskEvent?: CalendarEventDate;
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
  limit?: number;
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
