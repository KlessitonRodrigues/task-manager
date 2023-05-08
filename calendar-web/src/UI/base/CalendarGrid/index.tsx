import { useMemo } from 'react';

import { renderWeeks } from './services/renderWeeks';
import { Container } from './styled';

const CalendarGrid = (props: CalendarGridProps) => {
  const { monthWeeks, expandedWeek } = props;
  const WeeksToRender = useMemo(() => renderWeeks(props), monthWeeks);

  return <Container week={expandedWeek}>{WeeksToRender}</Container>;
};

export default CalendarGrid;
