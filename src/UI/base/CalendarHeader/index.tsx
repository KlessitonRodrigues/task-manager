import useGlobalContext from 'src/hooks/useGlobalContext/index';
import { useMemo } from 'react';
import { BsCaretLeft, BsCaretRight, BsPlus } from 'react-icons/bs';
import Button from '../Button/index';
import {
  Container,
  DateButton,
  DateContainer,
  DateLabel,
  HeaderContainer,
  Weekday,
  WeekdayContainer,
} from './styled';
import * as actions from './actions';

interface Props {
  children?: React.ReactNode;
}

const CalendarHeader = (props: Props) => {
  const [global, setGlobal] = useGlobalContext();
  const date = useMemo(() => new Date(global.currentDate), [global.currentDate]);

  return (
    <Container>
      <HeaderContainer>
        <Button
          iconLeft={<BsPlus fontSize="2rem" />}
          label="Add"
          p="0 1.5rem"
          onClick={() => setGlobal({ ...global, sidePanel: 'task' })}
        />
        <DateContainer>
          <Button
            label="Today"
            onClick={() =>
              setGlobal({ ...global, currentDate: actions.handleDateChange(date, 'today') })
            }
          />
          <DateButton
            onClick={() =>
              setGlobal({ ...global, currentDate: actions.handleDateChange(date, 'prevMonth') })
            }
          >
            <BsCaretLeft />
          </DateButton>
          <DateLabel>{date.toLocaleDateString('en', { month: 'long', year: 'numeric' })}</DateLabel>
          <DateButton
            onClick={() =>
              setGlobal({ ...global, currentDate: actions.handleDateChange(date, 'nextMonth') })
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
