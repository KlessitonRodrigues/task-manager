import { BsCalendar4, BsCaretLeft, BsCaretRight, BsPlusLg } from 'react-icons/bs';
import Button from 'src/UI/base/Button';

import * as actions from './actions';
import {
  Container,
  DateButton,
  DateContainer,
  DateLabel,
  HeaderContainer,
  Weekday,
  WeekdayContainer,
} from './styled';

const CalendarHeader = (props: CalendarHeaderProps) => {
  const { page } = props;
  const [pageState, setPage] = page;
  const date = new Date(pageState.currentDate);

  return (
    <Container>
      <HeaderContainer>
        <DateContainer>
          <DateButton
            onClick={() =>
              setPage({
                ...pageState,
                currentDate: actions.handleDateChange(date, 'prevMonth'),
              })
            }
          >
            <BsCaretLeft />
          </DateButton>

          <DateLabel>{date.toLocaleDateString('en', { month: 'long', year: 'numeric' })}</DateLabel>

          <DateButton
            onClick={() =>
              setPage({
                ...pageState,
                currentDate: actions.handleDateChange(date, 'nextMonth'),
              })
            }
          >
            <BsCaretRight />
          </DateButton>
        </DateContainer>
      </HeaderContainer>
    </Container>
  );
};

export default CalendarHeader;
