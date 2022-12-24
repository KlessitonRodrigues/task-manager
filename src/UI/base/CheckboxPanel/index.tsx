import { BsCheckCircle, BsCheckSquare, BsCircle, BsSquare } from 'react-icons/bs';

import { Checkbox, CheckboxContainer, Container, Label } from './styled';

const CheckboxPanel = (props: CheckboxPanelProps) => {
  const { iconFontSize, iconFormat, label, onChange, options, values } = props;
  const checkIcon = iconFormat === 'circle' ? <BsCircle /> : <BsSquare />;
  const checkedIcon = iconFormat === 'circle' ? <BsCheckCircle /> : <BsCheckSquare />;

  const CheckboxRender = options?.map(cb => {
    const isChecked = values?.includes(cb.value);
    return (
      <Checkbox
        checked={isChecked}
        iconSize={iconFontSize}
        onClick={() => onChange && onChange(cb.value)}
      >
        {isChecked ? cb.checkedIcon || checkedIcon : cb.icon || checkIcon}
        {cb.value}
      </Checkbox>
    );
  });

  return (
    <Container>
      <Label display={!!label}>{label}</Label>
      <CheckboxContainer>{CheckboxRender}</CheckboxContainer>
    </Container>
  );
};

export default CheckboxPanel;
