import { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import Button from 'src/UI/base/Button';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import FormTitle from 'src/UI/base/FormTitle';
import Input from 'src/UI/base/Input';
import ToolBarForm from 'src/UI/base/ToolBarForm';

import { DateInputToUnix, timeInputToUnix, unixToDateInput } from './services/formatInput';

const AddEventForm = () => {
  const [form, setForm] = useState<AddEvent>({});

  console.log(form);

  return (
    <ToolBarForm>
      <FormTitle icon={<HiPlus />} label="Add event" />
      <Input
        label="Name"
        placeHolder="New event"
        value={form.name}
        onChange={name => setForm({ ...form, name })}
      />
      <Input
        label="Description"
        placeHolder="Quick description"
        value={form.description}
        onChange={description => setForm({ ...form, description })}
      />
      <Input
        label="Date"
        type="date"
        value={unixToDateInput(form.dateUnix)}
        onChange={date => setForm({ ...form, dateUnix: DateInputToUnix(date) })}
      />
      <Input
        label="Time"
        type="time"
        onChange={time => setForm({ ...form, dateUnix: timeInputToUnix(time) })}
      />

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
