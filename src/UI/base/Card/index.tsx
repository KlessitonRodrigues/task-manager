import { Container } from './styled';

interface Props {
  bgColor?: string;
  children: React.ReactNode;
}

const Card = (props: Props) => <Container bg={props.bgColor}>{props.children}</Container>;

export default Card;
