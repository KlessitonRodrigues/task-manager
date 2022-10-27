import React from 'react';
import { BsCheckCircle, BsCheckSquare, BsCircle, BsSquare } from 'react-icons/bs';
import { Checkbox, CheckboxContainer, Container, Label } from './styled';

interface Props {
  label?: string;
  values?: string[];
  options?: { value: string; icon?: React.ReactElement; checkedIcon?: React.ReactElement }[];
  onChange?: (values: string) => void;
  iconFormat?: 'square' | 'circle';
  iconFontSize?: string;
  limit?: number;
}

const CheckboxPanel = (props: Props) => {
  const checkIcon = props.iconFormat === 'circle' ? <BsCircle /> : <BsSquare />;
  const checkedIcon = props.iconFormat === 'circle' ? <BsCheckCircle /> : <BsCheckSquare />;

  const CheckboxRender = props.options?.map(cb => {
    const isChecked = props.values?.includes(cb.value);
    return (
      <Checkbox
        checked={isChecked}
        iconSize={props.iconFontSize}
        onClick={() => props.onChange && props.onChange(cb.value)}
      >
        {isChecked ? cb.checkedIcon || checkedIcon : cb.icon || checkIcon}
        {cb.value}
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
