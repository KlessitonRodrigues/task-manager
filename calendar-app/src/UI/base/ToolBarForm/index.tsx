import { PropsWithChildren } from 'react';

import { Background, Container } from './styled';

const ToolBarForm = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Background>
      <Container>{children}</Container>
    </Background>
  );
};

export default ToolBarForm;
