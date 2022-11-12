import { useState } from 'react';
import { Container, DaysContainer, TopLeft } from './styled';

interface Props {
  children: React.ReactNode;
  label: string;
}

const CalendarWeek = (props: Props) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Container onClick={() => setShowContent(!showContent)}>
      <TopLeft show={showContent}>{props.label}</TopLeft>
      <DaysContainer show={showContent}>{props.children}</DaysContainer>
    </Container>
  );
};

export default CalendarWeek;
