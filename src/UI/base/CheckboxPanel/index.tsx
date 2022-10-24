import React from 'react';
import { BsCheckCircle, BsCheckSquare, BsCircle, BsCircleFill, BsSquare } from 'react-icons/bs';
import { Checkbox, CheckboxContainer, Container, Label } from './styled';

interface Props {
  label?: string;
  values?: string[];
  options?: { value: string; icon?: React.ReactElement; checkedIcon?: React.ReactElement }[];
  onChange?: () => void;
  iconFormat?: 'square' | 'circle';
  iconFontSize?: string;
}

const CheckboxPanel = (props: Props) => {
  const checkIcon = props.iconFormat === 'circle' ? <BsCircle /> : <BsSquare />;
  const checkedIcon = props.iconFormat === 'circle' ? <BsCheckCircle /> : <BsCheckSquare />;

  const CheckboxRender = props.options?.map(c => {
    const isChecked = props.values?.includes(c.value);
    return (
      <Checkbox checked={isChecked} iconSize={props.iconFontSize}>
        {isChecked ? c.checkedIcon || checkedIcon : c.icon || checkIcon}
        {c.value}
      </Checkbox>
    );
  });

  return (
    <Container>
      <Label>{props.label}</Label>
      <CheckboxContainer>{CheckboxRender}</CheckboxContainer>
    </Container>
  );
};

export default CheckboxPanel;
