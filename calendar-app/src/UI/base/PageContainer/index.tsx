import { PropsWithChildren } from 'react';
import ToolBarContent from 'src/UI/components/ToolBarContent';

import { Page, PageContent } from './styled';

const PageContainer = (props: PropsWithChildren) => (
  <Page>
    <ToolBarContent />
    <PageContent>{props.children}</PageContent>
  </Page>
);

export default PageContainer;
