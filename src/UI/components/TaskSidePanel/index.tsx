import SidePanel from '@UI/base/SidePanel/index';
import SidePanelTitle from '@UI/base/SidePanelTitle/index';
import { BsCalendar3 } from 'react-icons/bs';
import SidePanelSection from '@UI/base/SidePanelSection/index';
import Input from '@UI/base/Input/index';
import CheckboxPanel from '@UI/base/CheckboxPanel/index';

const TaskSidePanel = () => {
  return (
    <SidePanel show>
      <SidePanelTitle label="Task" icon={<BsCalendar3 />} />
      <SidePanelSection label="Date & time">
        <Input label="Date" type="date" />
        <Input label="Time" type="time" />
      </SidePanelSection>
      <SidePanelSection label="Repeat Task">
        <CheckboxPanel
          values={['Daily']}
          iconFormat="circle"
          options={[
            { value: 'Daily' },
            { value: 'Weekly' },
            { value: 'Monthly' },
            { value: 'Yearly' },
          ]}
        />
        <CheckboxPanel
          values={['Daily']}
          iconFormat="circle"
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
