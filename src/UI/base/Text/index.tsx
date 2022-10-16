import { TextContainer } from './styled';

interface Props {
  content?: string;
}

const Text = (props: Props) => <TextContainer>{props.content || ''}</TextContainer>;

export default Text;
