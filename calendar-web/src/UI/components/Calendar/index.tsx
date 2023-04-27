import { useEffect, useMemo, useState } from 'react';
import CalendarHeader from 'src/UI/base/CalendarHeader';
import { apiClient } from 'src/apiClient';

import { renderWeeks } from './services/renderWeeks';
import { Container, Content } from './styled';

export const Calendar = () => {
  const [expandedWeek, setWeek] = useState(0);

  return (
    <Container>
      <CalendarHeader currentDateState={currentDateState} />
      <Content week={expandedWeek + 1}>{weeksToRender}</Content>
    </Container>
  );
};

export default Calendar;
