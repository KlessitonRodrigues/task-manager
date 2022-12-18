import { BsX } from 'react-icons/bs';

import { CloseBtn, Container, Title } from './styled';

interface Props {
  label?: string;
  icon?: React.ReactElement;
  onClose?: () => void;
}

const SidePanelTitle = (props: Props) => (
  <Container>
    <Title>
      {props.icon}
      {props.label}
    </Title>
    <CloseBtn>
      <BsX fontSize="2rem" onClick={() => props.onClose && props.onClose()} />
    </CloseBtn>
  </Container>
);

export default SidePanelTitle;
