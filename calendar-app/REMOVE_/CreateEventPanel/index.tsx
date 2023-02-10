import { useCallback, useState } from 'react';
import {
  BsCalendar3,
  BsCalendarMonth,
  BsCalendarMonthFill,
  BsCalendarWeek,
  BsCalendarWeekFill,
} from 'react-icons/bs';
import Button from 'src/UI/base/Button/index';
import CheckboxPanel from 'src/UI/base/CheckboxPanel/index';
import If from 'src/UI/base/If';
import Input from 'src/UI/base/Input/index';
import SidePanelSection from 'src/UI/base/SectionContent/index';
import SidePanel from 'src/UI/base/SidePanel/index';
import SidePanelTitle from 'src/UI/base/SidePanelTitle/index';

import * as actions from './actions';

const CreateEventPanel = (props: CreateEventPanelProps) => {
  const { show, onClose } = props;
  const [taskForm, setTaskForm] = useState(actions.createEventFormMock());
  const [expandedSection, setSection] = useState('Information');

  const handleSextion = useCallback(
    (label: string) => {
      if (label == expandedSection) return setSection('');
      setSection(label);
    },
    [expandedSection]
  );

  return (
    <SidePanel show={show}>
      <SidePanelTitle label="Task" icon={<BsCalendar3 />} onClose={onClose} />

      <SidePanelSection
        label="Information"
        expanded={expandedSection === 'Information'}
        onExpand={handleSextion}
      >
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

      <SidePanelSection
        label="Date & time"
        expanded={expandedSection === 'Date & time'}
        onExpand={handleSextion}
      >
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

      <SidePanelSection
        label="Repeat"
        expanded={expandedSection === 'Repeat'}
        onExpand={handleSextion}
      >
        <CheckboxPanel
          label="By"
          values={[taskForm.repeatPeriod]}
          iconFontSize="1.2rem"
          onChange={(value: EventFormRepeatPeriod) =>
            setTaskForm({ ...taskForm, repeatPeriod: value })
          }
          options={[
            {
              value: 'day',
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
        <If true={taskForm.repeatPeriod === 'day'}>
          <CheckboxPanel
            label="At"
            values={taskForm.repeatAtDays}
            iconFontSize="1.2rem"
            onChange={(value: (typeof taskForm.repeatAtDays)[0]) => {
              const repeatAtDays = actions.handleRepeatAt(value, taskForm.repeatAtDays);
              setTaskForm({ ...taskForm, repeatAtDays });
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
        </If>
        <Input
          label="Repeat util"
          type="date"
          onChange={date =>
            setTaskForm({
              ...taskForm,
              repeatUtilDate: actions.handleDateInput(date, taskForm.repeatUtilDate),
            })
          }
        />
      </SidePanelSection>

      <SidePanelSection
        label="Tags"
        expanded={expandedSection === 'Tags'}
        onExpand={handleSextion}
      ></SidePanelSection>

      <SidePanelSection
        label="Notes"
        expanded={expandedSection === 'Notes'}
        onExpand={handleSextion}
      ></SidePanelSection>

      <SidePanelSection
        label="Options"
        expanded={expandedSection === 'Options'}
        onExpand={handleSextion}
      ></SidePanelSection>

      <Button
        label="Save"
        onClick={() => {
          actions.handleSaveFrom(taskForm);
        }}
      />
    </SidePanel>
  );
};

export default CreateEventPanel;
