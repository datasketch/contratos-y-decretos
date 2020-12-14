const columnsFilter = document.getElementById('columns-filter');
const container = document.getElementById('table');
const download = document.getElementById('download');
const nextPage = document.getElementById('next-page');
const prevPage = document.getElementById('prev-page');
const search = document.getElementById('search');
const wrapper = document.getElementById('wrapper');

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

  nextPage.addEventListener('click', function () {
    table.nextPage();
    const currentPage = table.getPage();
    prevPage.removeAttribute('disabled');
    if (currentPage === params.maxPages) {
      nextPage.setAttribute('disabled', '');
    }
  });

  prevPage.addEventListener('click', function () {
    table.previousPage();
    const currentPage = table.getPage();
    nextPage.removeAttribute('disabled');
    if (currentPage === 1) {
      prevPage.setAttribute('disabled', '');
    }
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

  columnsFilter.addEventListener('change', function (event) {
    const column = event.target.value;
    table.toggleColumn(column);
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
      visible: index < 7,
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
    pagination: 'local',
    paginationSize: 10,
  };
  const table = new Tabulator(container, options);
  const maxPages = table.getPageMax();
  createColumnsFilter(columns);
  registerListeners(table, { maxPages, searchFields: headers });
}

function main() {
  const scroller = scrollama();
  scroller
    .setup({
      progress: true,
      offset: 0,
      step: '.step',
    })
    .onStepProgress(function (info) {
      wrapper.style.opacity = 1 - info.progress * 6;
    });
  const reader = new GSheetReader();
  const sheetId = '1Nble1xMKe_amwqlfQzOKwrqXYJxUqgHtPc-DNrbzSao';
  reader.getJSON(sheetId).then(renderTable).catch(console.log);
}

main();
