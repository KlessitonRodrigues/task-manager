import { BsCheckCircle, BsCheckSquare, BsCircle, BsSquare } from 'react-icons/bs';

import { Checkbox, CheckboxContainer, Container, Label } from './styled';

const CheckboxPanel = (props: CheckboxPanelProps) => {
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
