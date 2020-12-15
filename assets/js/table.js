const container = document.getElementById('table');
const download = document.getElementById('download');
const search = document.getElementById('search');

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

function registerListeners(table, params) {
  download.addEventListener('click', function () {
    table.download('csv', 'contratos-y-decretos.csv');
  });

  search.addEventListener('input', function (event) {
    const value = event.target.value.trim();
    const searchFilters = value
      ? params.searchFields.map((field) => ({
          field,
          value: value,
          type: 'like',
        }))
      : null;
    searchFilters ? table.setFilter([searchFilters]) : table.clearFilter();
  });
}

function createColumnsFilter(columns) {
  columns.forEach((column) => {
    const id = column.field.toLowerCase().replace(/\s/g, '_');
    const checkbox = `
      <input
        id="${id}"
        type="checkbox"
        name="column"
        class="hidden"
        value="${column.field}"
        ${column.visible && 'checked'}
      >
      <label for="${id}" class="flex items-center space-x-1 select-none cursor-pointer">
        <span class="column-indicator"></span>
        <span>${column.title}</span>
      </label>
    `;
    columnsFilter.innerHTML += checkbox;
  });
}

function renderTable(response) {
  const { headers, data } = response;
  const columns = headers.map((header, index) => {
    const columnDef = {
      title: header,
      field: header,
      minWidth: 150,
      formatter: 'textarea'
    };
    if (header === 'Semaforo' || header === 'Semáforo') {
      return Object.assign(columnDef, {
        formatter: function (cell) {
          const imageUrl = imageMapper[cell.getValue().toLowerCase()];
          return `<img class="h-10 mx-auto" src="${imageUrl}">`;
        },
      });
    }
    return columnDef;
  });
  const options = {
    columns,
    data,
    layout: 'fitColumns',
  };
  const table = new Tabulator(container, options);
  const maxPages = table.getPageMax();
  // createColumnsFilter(columns);
  registerListeners(table, { maxPages, searchFields: headers });
}

function main() {
  const reader = new GSheetReader();
  const sheetId = '1Nble1xMKe_amwqlfQzOKwrqXYJxUqgHtPc-DNrbzSao';
  reader.getJSON(sheetId).then(renderTable).catch(console.log);
}

main();
