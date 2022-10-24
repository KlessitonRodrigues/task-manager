import SidePanel from '@UI/base/SidePanel/index';
import SidePanelTitle from '@UI/base/SidePanelTitle/index';
import {
  BsCalendar3,
  BsCalendar3Fill,
  BsCalendarDay,
  BsCalendarDayFill,
  BsCalendarMonth,
  BsCalendarMonthFill,
  BsCalendarWeek,
  BsCalendarWeekFill,
} from 'react-icons/bs';
import SidePanelSection from '@UI/base/SidePanelSection/index';
import Input from '@UI/base/Input/index';
import CheckboxPanel from '@UI/base/CheckboxPanel/index';
import useGlobalContext from '@hooks/useGlobalContext/index';

const TaskSidePanel = () => {
  const [global, setGlobal] = useGlobalContext();

  return (
    <SidePanel show={global.sidePanel === 'task'}>
      <SidePanelTitle
        label="Task"
        icon={<BsCalendar3 />}
        onClose={() => setGlobal({ ...global, sidePanel: '' })}
      />
      <SidePanelSection label="Date & time">
        <Input label="Date" type="date" />
        <Input label="Time" type="time" />
      </SidePanelSection>
      <SidePanelSection label="Repeat Task">
        <CheckboxPanel
          label="By"
          values={['Daily']}
          iconFontSize="1.2rem"
          options={[
            {
              value: 'Daily',
              icon: <BsCalendarDay />,
              checkedIcon: <BsCalendarDayFill />,
            },
            {
              value: 'Weekly',
              icon: <BsCalendarWeek />,
              checkedIcon: <BsCalendarWeekFill />,
            },
            {
              value: 'Monthly',
              icon: <BsCalendarMonth />,
              checkedIcon: <BsCalendarMonthFill />,
            },
            {
              value: 'Yearly',
              icon: <BsCalendar3 />,
              checkedIcon: <BsCalendar3Fill />,
            },
          ]}
        />
        <CheckboxPanel
          label="At"
          values={['Daily']}
          iconFontSize="1.2rem"
          options={[
            { value: 'Mon' },
            { value: 'Tue' },
            { value: 'Wed' },
            { value: 'Thu' },
            { value: 'Fri' },
            { value: 'Sat' },
            { value: 'Sun' },
          ]}
        />
      </SidePanelSection>
    </SidePanel>
  );
};

export default TaskSidePanel;
