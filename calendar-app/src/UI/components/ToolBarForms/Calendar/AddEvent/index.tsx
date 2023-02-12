import { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import Button from 'src/UI/base/Button';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import FormTitle from 'src/UI/base/FormTitle';
import Input from 'src/UI/base/Input';
import ToolBarForm from 'src/UI/base/ToolBarForm';
import { ISOToDateInput, ISOToTimeInput, dateInputToISO, timeInputToISO } from 'src/utils/date';

import { initialData, submitEventForm } from './services/handleForm';

const AddEventForm = () => {
  const [form, setForm] = useState<AddEventForm>(initialData);

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
        value={ISOToDateInput(form.dateISO)}
        onChange={date => setForm({ ...form, dateISO: dateInputToISO(date, form.dateISO) })}
      />
      <Input
        label="Time"
        type="time"
        value={ISOToTimeInput(form.dateISO)}
        onChange={time => setForm({ ...form, dateISO: timeInputToISO(time, form.dateISO) })}
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

      <Button label="Save" variant="solid" onClick={() => submitEventForm(form)} />
    </ToolBarForm>
  );
};

export default AddEventForm;
