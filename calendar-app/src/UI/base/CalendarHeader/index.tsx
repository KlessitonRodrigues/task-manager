import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

import * as actions from './actions';
import { Container, DateButton, DateContainer, DateLabel, HeaderContainer } from './styled';

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { page } = props;
  const [pageState, setPage] = page;
  const date = new Date(pageState.currentDate);

  const handlers = {
    changeMonth: {
      next: () =>
        setPage({
          ...pageState,
          currentDate: actions.handleDateChange(date, 'nextMonth'),
        }),
      prev: () =>
        setPage({
          ...pageState,
          currentDate: actions.handleDateChange(date, 'prevMonth'),
        }),
    },
    getMonthLabel: () => date.toLocaleDateString('en', { month: 'long', year: 'numeric' }),
  };

  return (
    <Container>
      <HeaderContainer>
        <DateContainer>
          <DateButton onClick={handlers.changeMonth.prev}>
            <BsCaretLeft />
          </DateButton>
          <DateLabel>{handlers.getMonthLabel()}</DateLabel>
          <DateButton onClick={handlers.changeMonth.next}>
            <BsCaretRight />
          </DateButton>
        </DateContainer>
      </HeaderContainer>
    </Container>
  );
};

export default CalendarHeader;
