import { useMemo } from 'react';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

import { monthDate } from './services/monthDate';
import { formatMonthLabel } from './services/monthLabel';
import { Container, DateButton, DateContainer, DateLabel, HeaderContainer } from './styled';

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { currentDate, changeMonth } = props;
  const monthLabel = useMemo(() => formatMonthLabel(currentDate), [currentDate]);

  return (
    <Container>
      <HeaderContainer>
        <DateContainer>
          <DateButton onClick={() => changeMonth(monthDate.prev(currentDate))}>
            <BsCaretLeft />
          </DateButton>
          <DateLabel>{monthLabel}</DateLabel>
          <DateButton onClick={() => changeMonth(monthDate.next(currentDate))}>
            <BsCaretRight />
          </DateButton>
        </DateContainer>
      </HeaderContainer>
    </Container>
  );
};

export default CalendarHeader;
