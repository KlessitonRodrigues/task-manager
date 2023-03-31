import { useState } from 'react';
import { BsMoon, BsMoonFill, BsSun, BsSunFill } from 'react-icons/bs';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import ColorPicker from 'src/UI/base/ColorPicker';
import FormContent from 'src/UI/base/FormContent';
import FormTitle from 'src/UI/base/FormTitle';
import ToolBarForm from 'src/UI/base/ToolBarForm';
import useGlobalContext from 'src/hooks/useGlobalContext';

const SettingsForm = () => {
  const [form, setForm] = useState({});
  const [expanded, setExpanded] = useState('');
  const [global, setGlobal] = useGlobalContext();

  const handleThemeChange = (value: Partial<SettingsDB['theme']>) => {
    const newTheme = { ...global.settings.theme, ...value };
    setGlobal({ ...global, settings: { ...global.settings, theme: newTheme } });
  };

  return (
    <ToolBarForm>
      <FormTitle label="Settings" />
      <FormContent label="theme" expanded={expanded === 'theme'} onExpand={setExpanded}>
        <CheckboxPanel
          iconFontSize="1.2rem"
          values={[global.settings.theme.mode]}
          options={[
            { value: 'light', icon: <BsSun />, checkedIcon: <BsSunFill /> },
            { value: 'dark', icon: <BsMoon />, checkedIcon: <BsMoonFill /> },
          ]}
          onChangeOne={(mode: 'dark' | 'light') => handleThemeChange({ mode })}
        />
        <ColorPicker bg="#0277BD" selected onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#347383" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#467444" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#0B6F17" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#6E71C4" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#8272E9" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#623DF5" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#8a7407" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#702e8e" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#7A542E" onClick={main => handleThemeChange({ main })} />
        <ColorPicker bg="#633617" onClick={main => handleThemeChange({ main })} />
        <ColorPicker
          picker
          border={global.settings.theme.main}
          onPickColor={main => handleThemeChange({ main })}
        />
      </FormContent>

      <FormContent label="general" expanded={expanded === 'general'} onExpand={setExpanded}>
        HELLO
      </FormContent>

      <FormContent label="adds" expanded={expanded === 'adds'} onExpand={setExpanded}>
        HELLO
      </FormContent>

      <FormContent label="database" expanded={expanded === 'database'} onExpand={setExpanded}>
        HELLO
      </FormContent>
    </ToolBarForm>
  );
};

export default SettingsForm;
