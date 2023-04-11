import { useState } from 'react';
import {
  BsCalendarDay,
  BsCalendarDayFill,
  BsCalendarMonth,
  BsCalendarMonthFill,
  BsCalendarWeek,
  BsCalendarWeekFill,
} from 'react-icons/bs';
import Button from 'src/UI/base/Button';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import FormTitle from 'src/UI/base/FormTitle';
import If from 'src/UI/base/If';
import Input from 'src/UI/base/Input';
import ToolBarForm from 'src/UI/base/ToolBarForm';
import { ISOToDateInput, ISOToTimeInput, dateInputToISO, timeInputToISO } from 'src/utils/date';

import { initialData, submitEventForm } from './services/handleForm';

const AddEventForm = () => {
  const [form, setForm] = useState<AddEventForm>(initialData);

  return (
    <ToolBarForm>
      <FormTitle label="Add event" />

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

      <CheckboxPanel
        label="Occurrecy"
        iconFormat="circle"
        values={[form.repeatBy]}
        onChangeOne={(repeatBy: AddEventForm['repeatBy']) => setForm({ ...form, repeatBy })}
        options={[
          { value: 'day', icon: <BsCalendarDay />, checkedIcon: <BsCalendarDayFill /> },
          { value: 'week', icon: <BsCalendarWeek />, checkedIcon: <BsCalendarWeekFill /> },
          { value: '2-week', icon: <BsCalendarWeek />, checkedIcon: <BsCalendarWeekFill /> },
          { value: 'month', icon: <BsCalendarMonth />, checkedIcon: <BsCalendarMonthFill /> },
        ]}
      />

      <If true={['week', '2-week'].includes(form.repeatBy)}>
        <CheckboxPanel
          label="Repeat at"
          values={form.repeatAt}
          onChangeAll={(repeatAt: AddEventForm['repeatAt']) => setForm({ ...form, repeatAt })}
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
      </If>

      <If true={['day', 'month'].includes(form.repeatBy)}>
        <Input
          label="Date"
          type="date"
          value={ISOToDateInput(form.dateISO)}
          onChange={date => setForm({ ...form, dateISO: dateInputToISO(date, form.dateISO) })}
        />
      </If>

      <Input
        label="Time"
        type="time"
        value={ISOToTimeInput(form.dateISO)}
        onChange={time => setForm({ ...form, dateISO: timeInputToISO(time, form.dateISO) })}
      />

      <Button label="Create" variant="solid" onClick={() => submitEventForm(form)} />
    </ToolBarForm>
  );
};

export default AddEventForm;
