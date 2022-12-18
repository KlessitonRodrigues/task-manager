import React from 'react';

import { Container } from './styled';

interface Props {
  show?: boolean;
  children?: React.ReactNode;
}

const SidePanel = (props: Props) => <Container show={props.show}>{props.children}</Container>;

export default SidePanel;
