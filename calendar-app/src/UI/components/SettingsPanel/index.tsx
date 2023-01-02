import { useCallback, useState } from 'react';
import { BsGear, BsMoon, BsMoonFill, BsSun, BsSunFill } from 'react-icons/bs';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import ColorPicker from 'src/UI/base/ColorPicker';
import SidePanel from 'src/UI/base/SidePanel';
import SidePanelSection from 'src/UI/base/SidePanelSection';
import SidePanelTitle from 'src/UI/base/SidePanelTitle';
import useGlobalContext from 'src/hooks/useGlobalContext';

const SettingsPanel = () => {
  const [global, setGlobal] = useGlobalContext();
  const [expandedSection, setSection] = useState('Theme');

  const handleThemeChange = (value: Partial<typeof global.themeColors>) => {
    const newTheme = { ...global.themeColors, ...value };
    setGlobal({ ...global, themeColors: newTheme });
  };

  const handleSextion = useCallback(
    (label: string) => {
      if (label == expandedSection) return setSection('');
      setSection(label);
    },
    [expandedSection]
  );

  return (
    <SidePanel show={global.sidePanel === 'settings'}>
      <SidePanelTitle
        label="Settings"
        icon={<BsGear />}
        onClose={() => setGlobal({ ...global, sidePanel: '' })}
      />

      <SidePanelSection
        label="Theme"
        expanded={expandedSection === 'Theme'}
        onExpand={handleSextion}
      >
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
        <ColorPicker bg="#0277BD" selected onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#527EB7" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#347383" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#467444" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#0B6F17" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#6E71C4" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#8272E9" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#623DF5" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#7A542E" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#633617" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#702e8e" onClick={main => handleThemeChange({ main })} />
        <ColorPicker
          picker
          border={global.themeColors.main}
          onPickColor={main => handleThemeChange({ main })}
        />
      </SidePanelSection>

      <SidePanelSection
        label="Database"
        expanded={expandedSection === 'Database'}
        onExpand={handleSextion}
      ></SidePanelSection>

      <SidePanelSection
        label="Layout"
        expanded={expandedSection === 'Layout'}
        onExpand={handleSextion}
      ></SidePanelSection>
    </SidePanel>
  );
};

export default SettingsPanel;
