import Table from '../components/table';
import Link from 'next/link';
import Head from 'next/head';
import 'tabulator-tables/dist/css/tabulator_simple.min.css';

function TablePage() {
  return (
    <>
      <Head>
        <title>Tabla · Contratos y Decretos</title>
      </Head>
      <div className="bg-tiryan-purple px-4 py-2 text-white">
        <Link href="/">
          <a>&larr;Volver al inicio</a>
        </Link>
      </div>
      <Table paginate={false} columnsFilter={false} />
    </>
  );
}

export default TablePage;
