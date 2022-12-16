import { Container } from './styled';

const IconContainer = ({ icon, color, size }: IconContainerProps) => (
  <Container size={size} color={color}>
    {icon}
  </Container>
);

export default IconContainer;
