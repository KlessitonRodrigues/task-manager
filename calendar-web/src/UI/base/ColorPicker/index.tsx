import { BsEyedropper } from 'react-icons/bs';

import If from '../If';
import { Container, Input, InputContainer } from './styled';

const ColorPicker = (props: ColorPickerProps) => {
  const { bg, border, picker, selected, onClick, onPickColor } = props;

  return (
    <Container
      bg={bg}
      border={border}
      selected={selected}
      onClick={() => !picker && onClick && onClick(bg)}
    >
      <If check={picker}>
        <InputContainer>
          <BsEyedropper />
          <Input type="color" onBlur={ev => onPickColor && onPickColor(ev.target.value)} />
        </InputContainer>
      </If>
    </Container>
  );
};

export default ColorPicker;
