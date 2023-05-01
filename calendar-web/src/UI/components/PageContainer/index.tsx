import { PropsWithChildren } from 'react';

import NavigationBarContent from '../NavigationBarContent';
import { Page, PageContent } from './styled';

const PageContainer = (props: PropsWithChildren) => (
  <Page>
    <NavigationBarContent />
    <PageContent>{props.children}</PageContent>
  </Page>
);

export default PageContainer;
