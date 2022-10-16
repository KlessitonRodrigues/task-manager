import { Container } from './styled';

interface Props {
  children: React.ReactNode;
}

const Navigation = (props: Props) => <Container>{props.children}</Container>;

export default Navigation;
