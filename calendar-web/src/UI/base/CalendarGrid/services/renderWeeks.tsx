import { DayContainer, DayContent, DayHeader, WeekContainer, WeekContent } from '../styled';

export const renderWeeks = (props: CalendarGridProps) => {
  const { monthWeeks, onChangeWeek } = props;

  return monthWeeks.map((week, i) => (
    <WeekContainer onClick={() => onChangeWeek(i)}>
      <WeekContent>
        {week.map(day => (
          <DayContainer>
            <DayHeader>{day.day}</DayHeader>
            <DayContent>{day.day}</DayContent>
          </DayContainer>
        ))}
      </WeekContent>
    </WeekContainer>
  ));
};
