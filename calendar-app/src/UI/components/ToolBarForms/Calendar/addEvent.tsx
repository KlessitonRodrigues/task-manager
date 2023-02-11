import { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import Button from 'src/UI/base/Button';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import FormTitle from 'src/UI/base/FormTitle';
import Input from 'src/UI/base/Input';
import ToolBarForm from 'src/UI/base/ToolBarForm';

const AddEventForm = () => {
  return (
    <ToolBarForm>
      <FormTitle icon={<HiPlus />} label="Add event" />
      <Input label="Name" placeHolder="New event" />
      <Input label="Description" placeHolder="Quick description" />
      <Input label="Date" type="date" />
      <Input label="Time" type="time" />

      <CheckboxPanel
        label="Repeat by"
        iconFormat="circle"
        values={['day']}
        options={[{ value: 'day' }, { value: 'month' }]}
      />
      <CheckboxPanel
        label="Repeat at"
        values={['mon', 'tue']}
        options={[
          { value: 'mon' },
          { value: 'tue' },
          { value: 'wen' },
          { value: 'tur' },
          { value: 'fri' },
          { value: 'sat' },
          { value: 'sun' },
        ]}
      />

      <Button label="Save" variant="solid" />
      <Button label="Reset" variant="solid" />
    </ToolBarForm>
  );
};

export default AddEventForm;
