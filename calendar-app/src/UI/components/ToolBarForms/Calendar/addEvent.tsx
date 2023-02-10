import { HiPlus } from 'react-icons/hi';
import FormContent from 'src/UI/base/FormContent';
import FormTitle from 'src/UI/base/FormTitle';
import Input from 'src/UI/base/Input';
import ToolBarForm from 'src/UI/base/ToolBarForm';

const AddEventForm = () => {
  return (
    <ToolBarForm>
      <FormTitle icon={<HiPlus />} label="Add event" />
      <FormContent label="Description" expanded>
        <Input label="Name" />
      </FormContent>
    </ToolBarForm>
  );
};

export default AddEventForm;
