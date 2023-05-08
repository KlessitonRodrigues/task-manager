import { useMemo } from 'react';

import { renderWeeks } from './services/renderWeeks';
import { Container } from './styled';

const CalendarGrid = (props: CalendarGridProps) => {
  const WeeksToRender = useMemo(() => renderWeeks(props), props.dates);

  return <Container week={props.week}>{WeeksToRender}</Container>;
};

export default CalendarGrid;
