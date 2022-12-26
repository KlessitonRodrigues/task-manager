import { Container } from './styled';

const IconContainer = (props: IconContainerProps) => {
  const { icon, color, size } = props;

  return (
    <Container size={size} color={color}>
      {icon}
    </Container>
  );
};

export default IconContainer;
