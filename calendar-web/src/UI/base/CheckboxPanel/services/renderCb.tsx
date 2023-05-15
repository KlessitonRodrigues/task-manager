import { BsCheckCircle, BsCheckSquare, BsCircle, BsSquare } from 'react-icons/bs';

import { Checkbox } from '../styled';

export const renderCheckboxMap = (props: CheckboxPanelProps) => {
  const { iconFontSize, iconFormat, onChangeOne, onChangeAll, options, values = [] } = props;
  const checkIcon = iconFormat === 'circle' ? <BsCircle /> : <BsSquare />;
  const checkedIcon = iconFormat === 'circle' ? <BsCheckCircle /> : <BsCheckSquare />;

  return options?.map(checkbox => {
    const checkedIndex = values?.indexOf(checkbox.value);
    const isChecked = checkedIndex >= 0;
    return (
      <Checkbox
        key={checkbox.value}
        checked={isChecked}
        iconSize={iconFontSize}
        color={checkbox.color}
        onClick={() => {
          if (onChangeOne) onChangeOne(checkbox.value);
          if (onChangeAll) {
            if (isChecked) onChangeAll([...values?.filter((v, i) => i != checkedIndex)]);
            else onChangeAll([...values, checkbox.value]);
          }
        }}
      >
        {isChecked ? checkbox.checkedIcon || checkedIcon : checkbox.icon || checkIcon}
        {checkbox.value}
      </Checkbox>
    );
  });
};
