import { PropsWithChildren } from 'react';

import { Page } from './styled';

const PageContainer = (props: PropsWithChildren) => <Page>{props.children}</Page>;

export default PageContainer;
