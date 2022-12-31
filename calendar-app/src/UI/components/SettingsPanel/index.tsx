import { BsGear, BsMoon, BsMoonFill, BsSun, BsSunFill } from 'react-icons/bs';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import ColorPicker from 'src/UI/base/ColorPicker';
import SidePanel from 'src/UI/base/SidePanel';
import SidePanelSection from 'src/UI/base/SidePanelSection';
import SidePanelTitle from 'src/UI/base/SidePanelTitle';
import useGlobalContext from 'src/hooks/useGlobalContext';

const SettingsPanel = () => {
  const [global, setGlobal] = useGlobalContext();

  const handleThemeChange = (value: Partial<typeof global.themeColors>) => {
    const newTheme = { ...global.themeColors, ...value };
    setGlobal({ ...global, themeColors: newTheme });
  };

  return (
    <SidePanel show={global.sidePanel === 'settings'}>
      <SidePanelTitle
        label="Settings"
        icon={<BsGear />}
        onClose={() => setGlobal({ ...global, sidePanel: '' })}
      />
      <SidePanelSection label="Database"></SidePanelSection>
      <SidePanelSection label="Layout"></SidePanelSection>
      <SidePanelSection label="Theme">
        <CheckboxPanel
          label="Mode"
          iconFontSize="1.2rem"
          values={[global.themeColors.mode]}
          options={[
            { value: 'light', icon: <BsSun />, checkedIcon: <BsSunFill /> },
            { value: 'dark', icon: <BsMoon />, checkedIcon: <BsMoonFill /> },
          ]}
          onChange={(mode: 'dark' | 'light') => handleThemeChange({ mode })}
        />
        <SidePanelSection label="Main color" noLine>
          <ColorPicker bg="#2D6BC8" onClick={main => handleThemeChange({ main })} />
          <ColorPicker bg="#5E4AE3" onClick={main => handleThemeChange({ main })} />
          <ColorPicker bg="#845D5C" onClick={main => handleThemeChange({ main })} />
          <ColorPicker bg="#2C848C" onClick={main => handleThemeChange({ main })} />
          <ColorPicker bg="#467444" onClick={main => handleThemeChange({ main })} />
          <ColorPicker bg="#5E4AE3" onClick={main => handleThemeChange({ main })} />
          <ColorPicker
            picker
            border={global.themeColors.main}
            onPickColor={main => handleThemeChange({ main })}
          />
        </SidePanelSection>
        <SidePanelSection label="Alternative color" noLine>
          <ColorPicker bg="#2D6BC8" onClick={alter => handleThemeChange({ alter })} />
          <ColorPicker bg="#5E4AE3" onClick={alter => handleThemeChange({ alter })} />
          <ColorPicker bg="#845D5C" onClick={alter => handleThemeChange({ alter })} />
          <ColorPicker bg="#2C848C" onClick={alter => handleThemeChange({ alter })} />
          <ColorPicker bg="#467444" onClick={alter => handleThemeChange({ alter })} />
          <ColorPicker bg="#5E4AE3" onClick={alter => handleThemeChange({ alter })} />
          <ColorPicker
            picker
            border={global.themeColors.alter}
            onPickColor={alter => handleThemeChange({ alter })}
          />
        </SidePanelSection>
      </SidePanelSection>
    </SidePanel>
  );
};

export default SettingsPanel;
