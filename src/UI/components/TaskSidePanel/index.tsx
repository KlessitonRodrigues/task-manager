import { useState } from 'react';
import {
  BsCalendar3,
  BsCalendarMonth,
  BsCalendarMonthFill,
  BsCalendarWeek,
  BsCalendarWeekFill,
} from 'react-icons/bs';
import useGlobalContext from 'src/hooks/useGlobalContext/index';
import CheckboxPanel from 'src/UI/base/CheckboxPanel/index';
import Input from 'src/UI/base/Input/index';
import SidePanel from 'src/UI/base/SidePanel/index';
import SidePanelSection from 'src/UI/base/SidePanelSection/index';
import SidePanelTitle from 'src/UI/base/SidePanelTitle/index';

import Button from 'src/UI/base/Button/index';
import * as actions from './actions';
import If from 'src/UI/base/If';

const TaskSidePanel = () => {
  const [global, setGlobal] = useGlobalContext();
  const [taskForm, setTaskForm] = useState(actions.createEventFormMock());

  return (
    <SidePanel show={global.sidePanel === 'task'}>
      <SidePanelTitle
        label="Task"
        icon={<BsCalendar3 />}
        onClose={() => setGlobal({ ...global, sidePanel: '' })}
      />
      <SidePanelSection label="Information">
        <Input
          label="Name"
          type="text"
          value={taskForm.name}
          onChange={name => setTaskForm({ ...taskForm, name })}
        />
        <Input
          label="Description"
          type="text"
          value={taskForm.description}
          onChange={description => setTaskForm({ ...taskForm, description })}
        />
      </SidePanelSection>
      <SidePanelSection label="Date & time">
        <Input
          label="Date"
          type="date"
          onChange={date =>
            setTaskForm({
              ...taskForm,
              dateISO: actions.handleDateInput(date, taskForm.dateISO),
            })
          }
        />
        <Input
          label="Time"
          type="time"
          onChange={value =>
            setTaskForm({ ...taskForm, dateISO: actions.handleTimeInput(value, taskForm.dateISO) })
          }
        />
      </SidePanelSection>
      <SidePanelSection label="Repeat Task">
        <CheckboxPanel
          label="By"
          values={[taskForm.repeatBy]}
          iconFontSize="1.2rem"
          onChange={(value: 'week' | 'month') => setTaskForm({ ...taskForm, repeatBy: value })}
          options={[
            {
              value: 'week',
              icon: <BsCalendarWeek />,
              checkedIcon: <BsCalendarWeekFill />,
            },
            {
              value: 'month',
              icon: <BsCalendarMonth />,
              checkedIcon: <BsCalendarMonthFill />,
            },
          ]}
        />
        <If
          when={taskForm.repeatBy === 'week'}
          render={
            <CheckboxPanel
              label="At"
              values={taskForm.repeatAt}
              iconFontSize="1.2rem"
              onChange={(value: typeof taskForm.repeatAt[0]) => {
                const repeatAt = actions.handleRepeatAt(value, taskForm.repeatAt);
                setTaskForm({ ...taskForm, repeatAt });
              }}
              options={[
                { value: 'sun' },
                { value: 'mon' },
                { value: 'tue' },
                { value: 'wed' },
                { value: 'thu' },
                { value: 'fri' },
                { value: 'sat' },
              ]}
            />
          }
        />
        <Input
          label="Repeat times"
          type="number"
          placeHolder="0"
          value={taskForm.repeatTimes}
          onChange={amount => setTaskForm({ ...taskForm, repeatTimes: Number(amount) })}
        />
      </SidePanelSection>
      <SidePanelSection label="Tags"></SidePanelSection>
      <SidePanelSection label="Notes"></SidePanelSection>
      <SidePanelSection label="Options"></SidePanelSection>
      <Button
        label="Save"
        onClick={() => {
          actions.handleSaveFrom(taskForm);
        }}
      />
    </SidePanel>
  );
};

export default TaskSidePanel;
