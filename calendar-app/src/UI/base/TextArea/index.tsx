import { useState } from 'react';

import { handleTextAreaEv } from './services/handleTextArea';
import { Container, TextAreaInput, TextAreaLabel } from './styled';

const TextArea = (props: TextAreaProps) => {
  const { label, placeHolder, value, onChange } = props;
  return (
    <Container>
      <TextAreaLabel>
        {label}
        <TextAreaInput
          placeholder={placeHolder}
          value={value}
          onChange={ev => onChange && onChange(handleTextAreaEv(ev))}
        />
      </TextAreaLabel>
    </Container>
  );
};

export default TextArea;
