import { BsEyedropper } from 'react-icons/bs';

import If from '../If';
import { Container, Input, InputContainer } from './styled';

const ColorPicker = (props: ColorPickerProps) => {
  const { bg, border, picker, onClick, onPickColor } = props;

  return (
    <Container bg={bg} border={border} onClick={() => !picker && onClick && onClick(bg)}>
      <If
        true={picker}
        render={
          <InputContainer>
            <BsEyedropper fontSize="1.3rem" />
            <Input type="color" onBlur={ev => onPickColor && onPickColor(ev.target.value)} />
          </InputContainer>
        }
      />
    </Container>
  );
};

export default ColorPicker;
