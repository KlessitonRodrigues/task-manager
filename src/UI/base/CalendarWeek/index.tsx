import useGlobalContext from 'src/hooks/useGlobalContext/index';
import { Container, DaysContainer, TopLeft } from './styled';

interface Props {
  children: React.ReactNode;
  label: string;
  weekIndex: string;
}

const CalendarWeek = (props: Props) => {
  const [global, setGlobal] = useGlobalContext();
  const expanded = global.selectedWeek === props.weekIndex;

  return (
    <Container onClick={() => setGlobal({ ...global, selectedWeek: props.weekIndex })}>
      <TopLeft show={expanded}>{props.label}</TopLeft>
      <DaysContainer show={expanded}>{props.children}</DaysContainer>
    </Container>
  );
};

export default CalendarWeek;
