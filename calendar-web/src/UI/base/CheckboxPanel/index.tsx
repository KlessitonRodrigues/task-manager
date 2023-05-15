import { useMemo } from 'react';

import If from '../If';
import InfoTag from '../InfoTag';
import { renderCheckboxMap } from './services/renderCb';
import { CheckboxContainer, Container, Label } from './styled';

const CheckboxPanel = (props: CheckboxPanelProps) => {
  const { label, values, required, description } = props;
  const CheckboxRender = useMemo(() => renderCheckboxMap(props), [values]);

  return (
    <Container>
      <Label display={!!label}>
        {label}
        <If check={required || !!description}>
          <InfoTag {...props} />
        </If>
      </Label>
      <CheckboxContainer>{CheckboxRender}</CheckboxContainer>
    </Container>
  );
};

export default CheckboxPanel;
