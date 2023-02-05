import { BsKanban } from 'react-icons/bs';

import IconContainer from '../IconConainer';
import { Container } from './styled';

const ToolBar = (props: ToolBarProps) => {
  const {} = props;
  return (
    <Container>
      <IconContainer icon={<BsKanban fontSize="2rem" />} size={2} />
    </Container>
  );
};

export default ToolBar;
