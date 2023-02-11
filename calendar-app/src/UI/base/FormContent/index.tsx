import { BsCaretRightFill, BsChevronRight } from 'react-icons/bs';

import { Container, Content, Icon, Label, Row } from './styled';

const FormContent = (props: FormContentProps) => {
  const { label, expanded, onExpand, noLine, children } = props;

  return (
    <Container>
      <Row expanded={expanded} onClick={() => onExpand && onExpand(label)}>
        <Label>{label || ''}</Label>
        <Icon>
          <BsCaretRightFill />
        </Icon>
      </Row>
      <Content expanded={expanded}>{children}</Content>
    </Container>
  );
};

export default FormContent;
