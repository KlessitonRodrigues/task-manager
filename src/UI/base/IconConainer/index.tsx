import { Container } from './styled';

interface Props {
  color?: string;
  size?: number;
  icon: React.ReactElement;
}

const ImageContainer = ({ icon, color, size }: Props) => (
  <Container size={size} color={color}>
    {icon}
  </Container>
);

export default ImageContainer;
