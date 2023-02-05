import { useMemo } from 'react';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

import { formatMonthLabel } from './services/monthLabel';
import { Container, DateButton, DateContainer, DateLabel, HeaderContainer } from './styled';

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { currentDate, goNextMonth, goPrevMonth } = props;
  const monthLabel = useMemo(() => formatMonthLabel(currentDate), []);

  return (
    <Container>
      <HeaderContainer>
        <DateContainer>
          <DateButton onClick={goNextMonth}>
            <BsCaretLeft />
          </DateButton>
          <DateLabel>{monthLabel}</DateLabel>
          <DateButton onClick={goPrevMonth}>
            <BsCaretRight />
          </DateButton>
        </DateContainer>
      </HeaderContainer>
    </Container>
  );
};

export default CalendarHeader;
