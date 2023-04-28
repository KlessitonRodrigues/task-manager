import { useEffect, useMemo, useState } from 'react';
import CalendarHeader from 'src/UI/base/CalendarHeader';

import { renderWeeks } from './services/renderWeeks';
import { Container, Content } from './styled';

export const Calendar = () => {
  const [expandedWeek, setWeek] = useState(0);
  const [currentDate, setDate] = useState('');
  const weeksToRender = renderWeeks();

  return (
    <Container>
      <CalendarHeader currentDate={currentDate} onNext={() => {}} onPrev={() => {}} />
      <Content week={expandedWeek + 1}>{weeksToRender}</Content>
    </Container>
  );
};

export default Calendar;
