import { BsPlus } from 'react-icons/bs';
import { zeroLeft } from 'src/utils/date';

import IconButton from '../IconButton/index';
import { Container, Content, Header } from './styled';

const CalendarDay = (props: CalendarDayProps) => {
  const { day, month, selectedMonth, children } = props;

  return (
    <Container>
      <Header outOfMonth={selectedMonth !== month}>{zeroLeft(day)}</Header>
      <Content>
        {children}
        <IconButton variant="solid" icon={<BsPlus />} />
      </Content>
    </Container>
  );
};

export default CalendarDay;
