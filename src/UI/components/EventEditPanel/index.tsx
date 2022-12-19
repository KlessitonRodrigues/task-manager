import { BsPen } from 'react-icons/bs';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import Display from 'src/UI/base/Display';
import SidePanel from 'src/UI/base/SidePanel';
import SidePanelSection from 'src/UI/base/SidePanelSection';
import SidePanelTitle from 'src/UI/base/SidePanelTitle';
import useGlobalContext from 'src/hooks/useGlobalContext';

const EventEditPanel = () => {
  const [global] = useGlobalContext();

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
        <CheckboxPanel label="Todo" options={[]} />
      </SidePanelSection>
      <SidePanelSection label="Time"></SidePanelSection>
      <SidePanelSection label="Linked"></SidePanelSection>
    </SidePanel>
  );
};

export default EventEditPanel;
