import Head from 'next/head';
import { DashboardLayout } from '/components/dashboard-layout';

const Dashboard = () => (
  <>
    <Head>
      <title>
       Arrow Nap
      </title>
    </Head>
   
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
