import { useState } from 'react';
import {
  HiCheckCircle,
  HiClock,
  HiMinusCircle,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineMinusCircle,
  HiOutlineXCircle,
  HiXCircle,
} from 'react-icons/hi';
import Button from 'src/UI/base/Button';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import Display from 'src/UI/base/Display';
import FormTitle from 'src/UI/base/FormTitle';
import TextArea from 'src/UI/base/TextArea';
import ToolBarForm from 'src/UI/base/ToolBarForm';
import { api } from 'src/services/api/routes';

const EditEventForm = (props: EditEventFormProps) => {
  const { data } = props;
  const { name, description, currentTodo, currentTodoOcurrence, todoAmount } = data || {};
  const [form, setForm] = useState(data);

  return (
    <ToolBarForm>
      <FormTitle label="Edit Event" />

      <Display size="33%" label="Name" value={name} />
      <Display size="66%" label="Description" value={description} />

      <Display size="33%" label="Doing time" value={currentTodo?.doingTime || '0'} />
      <Display
        size="66%"
        label="Occurency"
        value={`${currentTodoOcurrence + 1} of ${todoAmount}`}
      />

      <CheckboxPanel
        label="State"
        iconFontSize="2rem"
        values={[form.currentTodo.status || 'todo']}
        onChangeOne={(status: EventDayStatus) =>
          setForm({ ...form, currentTodo: { ...form.currentTodo, status } })
        }
        options={[
          { value: 'todo', icon: <HiOutlineMinusCircle />, checkedIcon: <HiMinusCircle /> },
          { value: 'doing', color: 'yellow', icon: <HiOutlineClock />, checkedIcon: <HiClock /> },
          {
            value: 'done',
            color: 'green',
            icon: <HiOutlineCheckCircle />,
            checkedIcon: <HiCheckCircle />,
          },
          {
            value: 'canceled',
            color: 'red',
            icon: <HiOutlineXCircle />,
            checkedIcon: <HiXCircle />,
          },
        ]}
      />

      <TextArea
        label="Notes"
        placeHolder="Insert a note here"
        value={form.currentTodo.notes}
        onChange={notes => setForm({ ...form, currentTodo: { ...form.currentTodo, notes } })}
      />

      <Button label="Update" variant="solid" onClick={() => api.todos.updateTodo({ data: form })} />
    </ToolBarForm>
  );
};

export default EditEventForm;
