import { BsInfoCircle } from 'react-icons/bs';

import { Container, Description, Expanded, Icon, Required } from './styled';

const InfoTag = (props: InfoTagProps) => (
  <Container>
    <Icon required={props.required}>
      <BsInfoCircle />
    </Icon>
    <Expanded>
      {props.required && <Required>Required</Required>}
      <Description>{props.description}</Description>
    </Expanded>
  </Container>
);

export default InfoTag;
