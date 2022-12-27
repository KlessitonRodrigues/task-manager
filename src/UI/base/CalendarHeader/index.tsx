import { BsCalendar2Date, BsCaretLeft, BsCaretRight, BsPlusLg } from 'react-icons/bs';
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
          <Button
            iconLeft={<BsPlusLg />}
            label="Add"
            onClick={() => setPage({ ...pageState, sidePanel: 'createEvent' })}
          />
          <Button
            iconLeft={<BsCalendar2Date />}
            label="Today"
            onClick={() =>
              setPage({ ...pageState, currentDate: actions.handleDateChange(date, 'today') })
            }
          />
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
      <WeekdayContainer>
        <Weekday>SUN</Weekday>
        <Weekday>MON</Weekday>
        <Weekday>TUE</Weekday>
        <Weekday>WEN</Weekday>
        <Weekday>TUR</Weekday>
        <Weekday>FRI</Weekday>
        <Weekday>SAT</Weekday>
      </WeekdayContainer>
    </Container>
  );
};

export default CalendarHeader;
