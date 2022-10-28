import SidePanel from '@UI/base/SidePanel/index';
import SidePanelTitle from '@UI/base/SidePanelTitle/index';
import {
  BsCalendar3,
  BsCalendar3Fill,
  BsCalendarMonth,
  BsCalendarMonthFill,
  BsCalendarWeek,
  BsCalendarWeekFill,
} from 'react-icons/bs';
import SidePanelSection from '@UI/base/SidePanelSection/index';
import Input from '@UI/base/Input/index';
import CheckboxPanel from '@UI/base/CheckboxPanel/index';
import useGlobalContext from '@hooks/useGlobalContext/index';
import { useState } from 'react';

import * as actions from './actions';
import { TaskEvent, TaskEventGroup, taskEventMock } from 'src/@types/taskEvent';
import Button from '@UI/base/Button/index';

const TaskSidePanel = () => {
  const [global, setGlobal] = useGlobalContext();
  const [taskForm, setTaskForm] = useState<TaskEvent>(taskEventMock);

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
          values={[taskForm.group.repeatBy]}
          iconFontSize="1.2rem"
          onChange={(value: 'weekly' | 'monthly' | 'yearly') =>
            setTaskForm({ ...taskForm, group: { ...taskForm.group, repeatBy: value } })
          }
          options={[
            {
              value: 'weekly',
              icon: <BsCalendarWeek />,
              checkedIcon: <BsCalendarWeekFill />,
            },
            {
              value: 'monthly',
              icon: <BsCalendarMonth />,
              checkedIcon: <BsCalendarMonthFill />,
            },
            {
              value: 'yearly',
              icon: <BsCalendar3 />,
              checkedIcon: <BsCalendar3Fill />,
            },
          ]}
        />
        <CheckboxPanel
          label="At"
          values={taskForm.group.repeatAt}
          iconFontSize="1.2rem"
          onChange={(value: TaskEventGroup['repeatAt'][0]) => {
            const repeatAt = actions.handleRepeatAt(value, taskForm.group.repeatAt);
            setTaskForm({ ...taskForm, group: { ...taskForm.group, repeatAt } });
          }}
          options={[
            { value: 'mon' },
            { value: 'tue' },
            { value: 'wed' },
            { value: 'thu' },
            { value: 'fri' },
            { value: 'sat' },
            { value: 'sun' },
          ]}
        />
        <Input
          label="Repeat times"
          type="number"
          placeHolder="0"
          value={taskForm.group.repeatTimes}
          onChange={amount =>
            setTaskForm({ ...taskForm, group: { ...taskForm.group, repeatTimes: Number(amount) } })
          }
        />
      </SidePanelSection>
      <SidePanelSection label="Tags"></SidePanelSection>
      <SidePanelSection label="Notes"></SidePanelSection>
      <SidePanelSection label="Options"></SidePanelSection>
      <Button
        label="Save"
        onClick={() => {
          setGlobal({ ...global, localData: actions.handleSaveFrom(global.localData, taskForm) });
        }}
      />
    </SidePanel>
  );
};

export default TaskSidePanel;
