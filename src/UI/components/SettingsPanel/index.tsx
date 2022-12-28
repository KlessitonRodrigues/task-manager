import { BsGear } from 'react-icons/bs';
import ColorPicker from 'src/UI/base/ColorPicker';
import SidePanel from 'src/UI/base/SidePanel';
import SidePanelSection from 'src/UI/base/SidePanelSection';
import SidePanelTitle from 'src/UI/base/SidePanelTitle';

const SettingsPanel = () => {
  return (
    <SidePanel>
      <SidePanelTitle label="Settings" icon={<BsGear />} />
      <SidePanelSection label="Theme">
        <ColorPicker />
      </SidePanelSection>
      <SidePanelSection label="Database"></SidePanelSection>
      <SidePanelSection label="Layout"></SidePanelSection>
    </SidePanel>
  );
};

export default SettingsPanel;
