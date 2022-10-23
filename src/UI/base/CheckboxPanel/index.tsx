import React from 'react';
import { BsCheckCircle, BsCheckSquare, BsCircle, BsCircleFill, BsSquare } from 'react-icons/bs';
import { Checkbox, Container } from './styled';

interface Props {
  values?: string[];
  options?: { value: string; icon?: React.ReactElement; checkedIcon?: React.ReactElement }[];
  onChange?: () => void;
  iconFormat?: 'square' | 'circle';
}

const CheckboxPanel = (props: Props) => {
  const checkIcon = props.iconFormat === 'circle' ? <BsCircle /> : <BsSquare />;
  const checkedIcon = props.iconFormat === 'circle' ? <BsCheckCircle /> : <BsCheckSquare />;

  const CheckboxRender = props.options?.map(c => {
    const isChecked = props.values?.includes(c.value);
    return (
      <Checkbox checked={isChecked}>
        {isChecked ? c.checkedIcon || checkedIcon : c.icon || checkIcon}
        {c.value}
      </Checkbox>
    );
  });

  return <Container>{CheckboxRender}</Container>;
};

export default CheckboxPanel;
