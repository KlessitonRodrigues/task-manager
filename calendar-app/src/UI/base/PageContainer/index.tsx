import { PropsWithChildren } from 'react';

import ToolBar from '../ToolBar';
import { Page, PageContent } from './styled';

const PageContainer = (props: PropsWithChildren) => (
  <Page>
    <ToolBar />
    <PageContent>{props.children}</PageContent>
  </Page>
);

export default PageContainer;
