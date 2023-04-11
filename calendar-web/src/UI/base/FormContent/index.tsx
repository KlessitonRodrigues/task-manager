import { HiChevronRight } from 'react-icons/hi';

import { Container, Content, Icon, Label, Row } from './styled';

const FormContent = (props: FormContentProps) => {
  const { label, expanded, onExpand, children } = props;

  return (
    <Container>
      <Row expanded={expanded} onClick={() => onExpand && onExpand(label)}>
        <Icon>
          <HiChevronRight />
        </Icon>
        <Label>{label || ''}</Label>
      </Row>
      <Content expanded={expanded}>{children}</Content>
    </Container>
  );
};

export default FormContent;
