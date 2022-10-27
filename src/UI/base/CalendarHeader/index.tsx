import useGlobalContext from '@hooks/useGlobalContext/index';
import { BsPlus } from 'react-icons/bs';
import Button from '../Button/index';
import { Container, HeaderContainer, Weekday, WeekdayContainer } from './styled';

interface Props {
  children?: React.ReactNode;
}

const CalendarHeader = (props: Props) => {
  const [global, setGlobal] = useGlobalContext();

  return (
    <Container>
      <HeaderContainer>
        <Button
          iconLeft={<BsPlus fontSize="2rem" />}
          label="Add"
          p="0 1.5rem"
          onClick={() => setGlobal({ ...global, sidePanel: 'task' })}
        />
      </HeaderContainer>
      <WeekdayContainer>
        <Weekday>MON</Weekday>
        <Weekday>TUE</Weekday>
        <Weekday>WEN</Weekday>
        <Weekday>TUR</Weekday>
        <Weekday>FRI</Weekday>
        <Weekday>SAT</Weekday>
        <Weekday>SUN</Weekday>
      </WeekdayContainer>
    </Container>
  );
};

export default CalendarHeader;
