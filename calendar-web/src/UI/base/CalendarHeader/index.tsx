import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

import { monthDate } from './services/monthDate';
import { formatMonthLabel } from './services/monthLabel';
import { Container, DateButton, DateContainer, DateLabel, HeaderContainer } from './styled';

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { currentDate, onNext, onPrev } = props;
  const monthLabel = formatMonthLabel(currentDate);
  const prevMonth = () => onPrev(monthDate.prev(currentDate));
  const nextMonth = () => onNext(monthDate.next(currentDate));

  return (
    <Container>
      <HeaderContainer>
        <DateContainer>
          <DateButton onClick={prevMonth}>
            <BsCaretLeft />
          </DateButton>
          <DateLabel>{monthLabel}</DateLabel>
          <DateButton onClick={nextMonth}>
            <BsCaretRight />
          </DateButton>
        </DateContainer>
      </HeaderContainer>
    </Container>
  );
};

export default CalendarHeader;
