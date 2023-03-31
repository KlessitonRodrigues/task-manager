import { useMemo } from 'react';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import useGlobalContext from 'src/hooks/useGlobalContext';

import { monthDate } from './services/monthDate';
import { formatMonthLabel } from './services/monthLabel';
import { Container, DateButton, DateContainer, DateLabel, HeaderContainer } from './styled';

const CalendarHeader = () => {
  const [global, setGlobal] = useGlobalContext();
  const monthLabel = useMemo(() => formatMonthLabel(global.currentDate), [global.currentDate]);
  const monthHandlers = {
    prevMonth: () => setGlobal({ ...global, currentDate: monthDate.prev(global.currentDate) }),
    nextMonth: () => setGlobal({ ...global, currentDate: monthDate.next(global.currentDate) }),
  };

  return (
    <Container>
      <HeaderContainer>
        <DateContainer>
          <DateButton onClick={monthHandlers.prevMonth}>
            <BsCaretLeft />
          </DateButton>
          <DateLabel>{monthLabel}</DateLabel>
          <DateButton onClick={monthHandlers.nextMonth}>
            <BsCaretRight />
          </DateButton>
        </DateContainer>
      </HeaderContainer>
    </Container>
  );
};

export default CalendarHeader;
