import { DayContainer, DayContent, DayHeader, WeekContainer, WeekContent } from '../styled';
import { splitArr } from './splitArr';

export const renderWeeks = (props: CalendarGridProps) => {
  const weeks = splitArr(props.dates, 7);

  return weeks.map((week, i) => (
    <WeekContainer onClick={() => props.onChangeWeek(i)}>
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
