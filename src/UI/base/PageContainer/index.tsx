import { PropsWithChildren } from 'react';
import { Page } from './styled';

const PageConainer = (props: PropsWithChildren) => <Page>{props.children}</Page>;

export default PageConainer;
