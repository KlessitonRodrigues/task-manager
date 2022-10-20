import PageConainer from '@UI/base/PageContainer/index';
import Calendar from '@UI/components/Calendar/index';
import PageHeader from '@UI/components/PageHeader/index';

const HomePage = () => (
  <PageConainer>
    <PageHeader />
    <Calendar />
  </PageConainer>
);

export default HomePage;
