import { useState } from 'react';
import {
  BsClipboardCheck,
  BsClipboardData,
  BsClipboardPlus,
  BsClipboardX,
  BsPen,
  BsSdCard,
} from 'react-icons/bs';
import Button from 'src/UI/base/Button';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import Display from 'src/UI/base/Display';
import SidePanel from 'src/UI/base/SidePanel';
import SidePanelSection from 'src/UI/base/SidePanelSection';
import SidePanelTitle from 'src/UI/base/SidePanelTitle';
import Time from 'src/UI/base/Time';
import useGlobalContext from 'src/hooks/useGlobalContext';

const EditEventPanel = (props: EditEventPanelProps) => {
  const { editEvent } = props;
  const [global, setGlobal] = useGlobalContext();

  return (
    <SidePanel show={props.show}>
      <SidePanelTitle
        label="Event Edit"
        icon={<BsPen />}
        onClose={() => setGlobal({ ...global, sidePanel: '' })}
      />
      <SidePanelSection label="Description">
        <Display label="Name" value={editEvent?.event?.name} size="33%" />
        <Display label="Occurrence" value="4/12" size="33%" />
        <Display label="Created at" value={editEvent?.date?.iso} size="33%" />
        <Display label="Description" value={editEvent?.event?.description} size="100%" />
      </SidePanelSection>
      <SidePanelSection label="Status">
        <CheckboxPanel
          values={[editEvent?.status]}
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
      <Button label="Save" iconLeft={<BsSdCard />} />
    </SidePanel>
  );
};

export default EditEventPanel;
