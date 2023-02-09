import { PropsWithChildren } from 'react';

import { Container } from './styled';

const ToolBarForm = (props: PropsWithChildren) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default ToolBarForm;
