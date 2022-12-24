import { useState } from 'react';
import {
  BsClipboardCheck,
  BsClipboardData,
  BsClipboardPlus,
  BsClipboardX,
  BsPen,
} from 'react-icons/bs';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import Display from 'src/UI/base/Display';
import SidePanel from 'src/UI/base/SidePanel';
import SidePanelSection from 'src/UI/base/SidePanelSection';
import SidePanelTitle from 'src/UI/base/SidePanelTitle';
import Time from 'src/UI/base/Time';
import useGlobalContext from 'src/hooks/useGlobalContext';

const EventEditPanel = () => {
  const [global] = useGlobalContext();
  const [EditEventFrom, setEditForm] = useState();

  return (
    <SidePanel show>
      <SidePanelTitle label="Event Edit" icon={<BsPen />} />
      <SidePanelSection label="Description">
        <Display label="Name" value="Test Event" size="33%" />
        <Display label="Occurrence" value="4/12" size="33%" />
        <Display label="Created at" value="12.10.22" size="33%" />
        <Display label="Description" value="A test event on calendar" size="100%" />
      </SidePanelSection>
      <SidePanelSection label="Status">
        <CheckboxPanel
          values={['Todo']}
          iconFontSize="1.6rem"
          options={[
            { icon: <BsClipboardPlus />, checkedIcon: <BsClipboardPlus />, value: 'Todo' },
            { icon: <BsClipboardData />, checkedIcon: <BsClipboardData />, value: 'Doing' },
            { icon: <BsClipboardCheck />, checkedIcon: <BsClipboardCheck />, value: 'Done' },
            { icon: <BsClipboardX />, checkedIcon: <BsClipboardX />, value: 'Cancelled' },
          ]}
        />
      </SidePanelSection>
      <SidePanelSection label="Time">
        <Display label="Total time" color="none" value={<Time update startTime={10000000} />} />
      </SidePanelSection>
      <SidePanelSection label="Linked"></SidePanelSection>
    </SidePanel>
  );
};

export default EventEditPanel;
