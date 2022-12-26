import { BsX } from 'react-icons/bs';

import { CloseBtn, Container, Title } from './styled';

const SidePanelTitle = (props: SidePanelTitleProps) => {
  const { icon, label, onClose } = props;

  return (
    <Container>
      <Title>
        {icon}
        {label}
      </Title>
      <CloseBtn>
        <BsX fontSize="2rem" onClick={() => onClose && onClose()} />
      </CloseBtn>
    </Container>
  );
};

export default SidePanelTitle;
