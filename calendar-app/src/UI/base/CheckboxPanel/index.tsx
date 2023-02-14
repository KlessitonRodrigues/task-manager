import { BsCheckCircle, BsCheckSquare, BsCircle, BsSquare } from 'react-icons/bs';

import { Checkbox, CheckboxContainer, Container, Label } from './styled';

const CheckboxPanel = (props: CheckboxPanelProps) => {
  const { iconFontSize, iconFormat, label, onChangeOne, onChangeAll, options, values } = props;
  const checkIcon = iconFormat === 'circle' ? <BsCircle /> : <BsSquare />;
  const checkedIcon = iconFormat === 'circle' ? <BsCheckCircle /> : <BsCheckSquare />;

  const CheckboxRender = options?.map(cb => {
    const checkedIndex = values?.indexOf(cb.value);
    const isChecked = checkedIndex >= 0;
    return (
      <Checkbox
        key={cb.value}
        checked={isChecked}
        iconSize={iconFontSize}
        onClick={() => {
          if (onChangeOne) onChangeOne(cb.value);
          if (onChangeAll) {
            if (isChecked) onChangeAll([...values.filter((v, i) => i != checkedIndex)]);
            else onChangeAll([...values, cb.value]);
          }
        }}
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
