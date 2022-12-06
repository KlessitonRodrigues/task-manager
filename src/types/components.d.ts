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
