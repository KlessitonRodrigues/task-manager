import { Container } from './styled';

const Card = (props: CardProps) => <Container bg={props.bgColor}>{props.children}</Container>;

export default Card;
