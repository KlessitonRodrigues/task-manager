import React from 'react';

import { Container, Content, Label } from './styled';

interface Props {
  label: string;
  children?: React.ReactNode;
}

const SidePanelSection = (props: Props) => (
  <Container>
    <Label>{props.label}</Label>
    <Content>{props.children}</Content>
  </Container>
);

export default SidePanelSection;
