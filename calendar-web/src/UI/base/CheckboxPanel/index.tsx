import { useMemo } from 'react';

import { renderCheckboxMap } from './services/renderCb';
import { CheckboxContainer, Container, Label } from './styled';

const CheckboxPanel = (props: CheckboxPanelProps) => {
  const { label } = props;
  const CheckboxRender = useMemo(() => renderCheckboxMap(props), [props.values]);

  return (
    <Container>
      <Label display={!!label}>{label}</Label>
      <CheckboxContainer>{CheckboxRender}</CheckboxContainer>
    </Container>
  );
};

export default CheckboxPanel;
