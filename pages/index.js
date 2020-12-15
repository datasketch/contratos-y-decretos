import Intro from '../components/intro';
import Table from '../components/table';
import Head from 'next/head'
import 'tabulator-tables/dist/css/tabulator_simple.min.css';

function HomePage() {
  return (
    <>
      <Head>
        <title>Contratos y Decretos</title>
      </Head>
      <Intro />
      <Table paginate={true} columnsFilter={true} />
    </>
  );
}

export default HomePage;
