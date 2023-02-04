import { PropsWithChildren } from 'react';
import PageHeader from 'src/UI/components/PageHeader';

import { Page, PageContent } from './styled';

const PageContainer = (props: PropsWithChildren) => (
  <Page>
    <PageHeader />
    <PageContent>{props.children}</PageContent>
  </Page>
);

export default PageContainer;
