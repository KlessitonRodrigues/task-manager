import { BsX } from 'react-icons/bs';

import { CloseBtn, Container, Title } from './styled';

const FormTitle = (props: FormTitleProps) => {
  const { label, onClose } = props;

  return (
    <Container>
      <Title>{label}</Title>
      <CloseBtn>
        <BsX fontSize="2rem" onClick={() => onClose && onClose()} />
      </CloseBtn>
    </Container>
  );
};

export default FormTitle;
