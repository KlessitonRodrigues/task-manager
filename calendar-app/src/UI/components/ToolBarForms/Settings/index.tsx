import { useState } from 'react';
import { BsMoon, BsMoonFill, BsSun, BsSunFill } from 'react-icons/bs';
import CheckboxPanel from 'src/UI/base/CheckboxPanel';
import ColorPicker from 'src/UI/base/ColorPicker';
import FormContent from 'src/UI/base/FormContent';
import FormTitle from 'src/UI/base/FormTitle';
import ToolBarForm from 'src/UI/base/ToolBarForm';
import useGlobalContext from 'src/hooks/useGlobalContext';

import { handleTheme } from './Services/handleTheme';

const SettingsForm = () => {
  const [global, setGlobal] = useGlobalContext();
  const [expanded, setExpanded] = useState('theme');

  const themeState = handleTheme(global, setGlobal);

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
          onChangeOne={themeState.setMode}
        />
        <ColorPicker bg="#3d3d3d" onClick={themeState.setMain} />
        <ColorPicker bg="#485270" onClick={themeState.setMain} />
        <ColorPicker bg="#2a66de" selected onClick={themeState.setMain} />
        <ColorPicker bg="#2074b0" onClick={themeState.setMain} />
        <ColorPicker bg="#175e4b" onClick={themeState.setMain} />
        <ColorPicker bg="#684885" onClick={themeState.setMain} />
        <ColorPicker bg="#491f9c" onClick={themeState.setMain} />
        <ColorPicker bg="#611335" onClick={themeState.setMain} />
        <ColorPicker bg="#613a00" onClick={themeState.setMain} />
        <ColorPicker picker border={global.settings.theme.main} onPickColor={themeState.setMain} />
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
