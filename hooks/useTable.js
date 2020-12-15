import GSheetReader from '@ddazal/gsheetreader';
import Tabulator from 'tabulator-tables';
import { useEffect, useState } from 'react';

function useTable(el, { paginate }) {
  const imageMapper = {
    amarillo:
      'https://res.cloudinary.com/randommonkey/image/upload/v1607717497/contratos-y-decretos/amarillo.png',
    rojo:
      'https://res.cloudinary.com/randommonkey/image/upload/v1607717505/contratos-y-decretos/rojo.png',
    verde:
      'https://res.cloudinary.com/randommonkey/image/upload/v1607717495/contratos-y-decretos/verde.png',
    naranja:
      'https://res.cloudinary.com/randommonkey/image/upload/v1607717489/contratos-y-decretos/naranja.png',
  };

  const [columns, setColumns] = useState();
  const [table, setTable] = useState();
  const [maxPages, setMaxPages] = useState();
  const [headers, setHeaders] = useState();

  useEffect(async () => {
    const reader = new GSheetReader();
    const sheetId = '1Nble1xMKe_amwqlfQzOKwrqXYJxUqgHtPc-DNrbzSao';
    const { headers, data } = await reader.getJSON(sheetId);
    const columns = headers.map((header, index) => {
      const columnDef = {
        title: header,
        field: header,
        minWidth: 270,
        visible: index < 7,
        formatter: 'textarea',
      };
      if (header === 'Semaforo' || header === 'Semáforo') {
        return Object.assign(columnDef, {
          formatter: function (cell) {
            const imageUrl = imageMapper[cell.getValue().toLowerCase()];
            return `<img class="h-16 mx-auto" src="${imageUrl}">`;
          },
        });
      }
      if (header === 'Enlace decreto' || header === 'Enlace Decreto') {
        return Object.assign(columnDef, {
          formatter: 'link',
          formatterParams: { target: '_blank' },
        });
      }
      return columnDef;
    });
    let options = {
      columns,
      data,
      layout: 'fitColumns',
    };
    if (paginate) {
      options = {
        ...options,
        pagination: 'local',
        paginationSize: 5,
      };
    }
    const table = new Tabulator(el.current, options);
    const maxPages = table.getPageMax();
    setTable(table);
    setColumns(columns);
    setHeaders(headers);
    setMaxPages(maxPages);
  }, []);

  return {
    table,
    columns,
    headers,
    maxPages,
  };
}

export default useTable;
