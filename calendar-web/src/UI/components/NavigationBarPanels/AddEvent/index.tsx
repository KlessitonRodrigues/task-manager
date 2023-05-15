import { useState } from 'react';
import {
  BsCalendarDate,
  BsCalendarDateFill,
  BsCalendarWeek,
  BsCalendarWeekFill,
} from 'react-icons/bs';
import Button from 'src/UI/base/Button';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import If from 'src/UI/base/If';
import Input from 'src/UI/base/Input';

const AddEventForm = () => {
  const [form, setForm] = useState<AddEventForm>({ occurency: 'unique' });

  return (
    <>
      <Input label="Name" required onChange={name => setForm({ ...form, name })} />
      <Input label="Description" onChange={description => setForm({ ...form, description })} />
      <Input type="time" required label="Time" onChange={time => setForm({ ...form, time })} />

      <CheckboxPanel
        label="Ocurrency"
        iconFontSize="1.4rem"
        required
        description="Frequency of this event should appear on calendar"
        values={[form.occurency]}
        onChangeOne={(occurency: AddEventForm['occurency']) => setForm({ ...form, occurency })}
        options={[
          {
            value: 'unique',
            icon: <BsCalendarDate />,
            checkedIcon: <BsCalendarDateFill />,
          },
          {
            value: 'weekly',
            icon: <BsCalendarWeek />,
            checkedIcon: <BsCalendarWeekFill />,
          },
        ]}
      />

      <If
        check={form.occurency === 'unique'}
        true={<Input type="date" label="Date" />}
        false={
          <CheckboxPanel
            label="Week days"
            iconFontSize="1.2rem"
            values={form.weekDays}
            onChangeAll={(weekDays: AddEventForm['weekDays']) => setForm({ ...form, weekDays })}
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
        }
      />

      <Button variant="solid" label="Add" />
    </>
  );
};

export default AddEventForm;
