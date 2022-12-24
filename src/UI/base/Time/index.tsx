import { useEffect, useState } from 'react';
import { getTimeFormat } from 'src/utils/date';

import { Container } from './styled';

const Time = (props: TimeProps) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const gapTime = (props.endTime || Date.now()) - props.startTime;
    const totalTime = new Date(gapTime).toLocaleTimeString('pt-br', getTimeFormat());
    if (props.update) {
      const timeout = setTimeout(() => setTime(totalTime), time ? 1001 : 1);
      return () => clearTimeout(timeout);
    } else setTime(totalTime);
  }, [time]);

  return <Container>{time}</Container>;
};

export default Time;
