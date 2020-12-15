import Link from 'next/link';
import useTable from '../hooks/useTable';
const { useRef, useState } = require('react');

function Table(props) {
  const tableEl = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { table, columns, maxPages, headers } = useTable(tableEl, {
    paginate: props.paginate,
  });

  const handleSearch = (event) => {
    const value = event.target.value.trim();
    const searchFilters = value
      ? headers.map((field) => ({
          field,
          value: value,
          type: 'like',
        }))
      : null;
    searchFilters ? table.setFilter([searchFilters]) : table.clearFilter();
  };

  const handlePreviousPage = () => {
    table.previousPage();
    const currentPage = table.getPage();
    setCurrentPage(currentPage);
  };

  const handleNextPage = () => {
    table.nextPage();
    const currentPage = table.getPage();
    setCurrentPage(currentPage);
  };

  const handleCheckboxChange = (event) => {
    const column = event.target.value;
    table.toggleColumn(column);
    table.redraw();
  };

  return (
    <>
      <div className="shadow-inner">
        <div className="py-4 flex items-center space-x-4 px-4 bg-gray-200">
          <img className="w-6" src="media/lupa.png" alt="" />
          <input
            className="flex-grow focus:outline-none text-lg placeholder-tiryan-purple bg-gray-200 text-tiryan-purple"
            type="text"
            placeholder="Ingresa palabra clave"
            onInput={(e) => handleSearch(e)}
          />
        </div>
        <div ref={tableEl} className="text-base"></div>
        {props.columnsFilter && (
          <div className="bg-gray-200 px-4 py-3">
            <p className="text-center text-tiryan-purple text-sm font-bold tracking-wide uppercase">
              Selecciona aquí las columnas que quieras agregar a la tabla
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center md:space-x-3 max-w-7xl mx-auto mt-2">
              {columns &&
                columns.map((col) => {
                  const id = col.field.toLowerCase().replace(/\s/g, '_');
                  return (
                    <div key={id}>
                      <input
                        id={id}
                        type="checkbox"
                        name="column"
                        className="hidden"
                        value={col.field}
                        defaultChecked={col.visible}
                        onChange={(e) => handleCheckboxChange(e)}
                      />
                      <label
                        htmlFor={id}
                        className="flex items-center space-x-1 select-none cursor-pointer"
                      >
                        <span className="column-indicator"></span>
                        <span>{col.title}</span>
                      </label>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
        {props.paginate ? (
          <div className="bg-tiryan-purple px-4 flex flex-col md:flex-row md:items-center">
            <div className="hidden md:block md:w-1/3"></div>
            <div className="flex space-x-6 justify-center w-full md:w-1/3">
              <button
                className="focus:outline-none flex items-center text-white font-bold py-2"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <img className="w-8" src="media/chevron.png" alt="" />
                <span>Anterior</span>
              </button>
              <button
                className="focus:outline-none flex items-center text-white font-bold py-2"
                onClick={handleNextPage}
                disabled={currentPage === maxPages}
              >
                <span>Siguiente</span>
                <img
                  className="w-8 transform rotate-180"
                  src="media/chevron.png"
                  alt=""
                />
              </button>
            </div>
            <div className="w-full md:w-1/3 space-x-2 flex flex-col items-center py-2 md:flex-row md:justify-end">
              <Link href="/">
                <a className="text-white">Ver tabla completa</a>
              </Link>
              <a
                className="bg-white px-2 py-1 rounded-lg text-tiryan-purple font-bold cursor-pointer"
                download={true}
                onClick={() =>
                  table.download('csv', 'contratos-y-decretos.csv')
                }
              >
                Descargar
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-tiryan-purple px-4 py-2 text-right">
            <a
              className="bg-white px-2 py-1 rounded-lg text-tiryan-purple font-bold cursor-pointer"
              download={true}
              onClick={() => table.download('csv', 'contratos-y-decretos.csv')}
            >
              Descargar
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Table;
