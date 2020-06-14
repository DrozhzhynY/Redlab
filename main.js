'use strict'

const API_URL = "https://drozhzhyny.github.io/Redlab/db.json";

const getPeople = () => {
  return fetch(API_URL)
    .then(response => response.json());
};

let tableHtmlEn;
let previewHtmlEn;
let changeLang;

let tableHtml;
let previewHtml;

let changeView;

let sortTableById;
let sortPreviewById;
let sortTableByName;
let sortPreviewByName;
let sortTableByAge;
let sortPreviewByAge;
let reverseTable;
let reversePreview;

const getTableInEnglish = (data) => {

  tableHtmlEn = 
  `
    <div class='control'>
      <div class='control__sort'>
        <p>Sort by:</p>
        <button onclick='sortById()' class='button'>ID</button>
        <button onclick='sortByName()' class='button'>Name</button>
        <button onclick='sortByAge()' class='button'>Years old</button>
        <br>
        <button onclick='reverse()' class='button'>Ascending</button>
        <button onclick='reverse()' class='button'>Descending</button>
      </div>

      <div class='control__view'>
        <p>Viev</p>
        <button onclick='changeView(tableHtml)' class='button'>Table</button>
        <button onclick='changeView(previewHtml)' class='button'>Preview</button>
        <br>
        <button onclick='changeView(tableHtml)' class='button'>rus</button>
        <button onclick='changeLang(tableHtmlEn)' class='button'>en</button>
      </div>
    </div>
  `

  tableHtmlEn += `<ul class='people people__list'>`;
  data.map(person => (
    tableHtmlEn += 
    `
      <li class='person person__info'>
        <div class='person__photo'></div>
        <p class='person__name'>${person.name.en}</p>
        <p class='person__age'>${person.age}years</p>
        <p class='person__phone'>${person.phone}</p>
        <div class='person__favor'><input type='checkbox'></input></div>
      </li>
    `
  ))

  tableHtmlEn += `</ul>`;

  return tableHtmlEn;
};

const getPreviewInEnglish = (data) => {

  previewHtmlEn = 
  `
    <div class='control'>
      <div class='control__sort'>
        <p>Sort by:</p>
        <button onclick='sortById()' class='button'>ID</button>
        <button onclick='sortByName()' class='button'>Name</button>
        <button onclick='sortByAge()' class='button'>Years old</button>
        <br>
        <button onclick='reverse()' class='button'>Ascending</button>
        <button onclick='reverse()' class='button'>Descending</button>
      </div>

      <div class='control__view'>
        <p>Viev</p>
        <button onclick='changeView(tableHtml)' class='button'>Table</button>
        <button onclick='changeView(previewHtml)' class='button'>Preview</button>
        <br>
        <button onclick='changeView(previewHtml)' class='button'>rus</button>
        <button onclick='changeLang(previewHtmlEn)' class='button'>en</button>
      </div>
    </div>
  `

  previewHtmlEn += `<div class='preview preview__list'>`;
  data.map(person => (
    previewHtmlEn += 
    `
      <div class='preview__info'>
        <div class='preview__wrap'>
          <div class='preview__wrap-inner'>
            <div class='preview__photo'></div>
            <p class='preview__name'>${person.name.en}</p>
          </div>
          <div class='preview__favor'><input type='checkbox'></input></div>
        </div>
        <p class='preview__age'>${person.age}лет</p>
        <p class='preview__phone'>${person.phone}</p>
        <p class='preview__phrase'>${person.phrase.en}</p>
      </div>
    `
  ))
  previewHtmlEn += `</div>`

  return previewHtmlEn;
};

const getTable = (data) => {

  tableHtml = 
  `
    <div class='control'>
      <div class='control__sort'>
        <p>Сортировка</p>
        <button onclick='sortTableById()' class='button'>ID</button>
        <button onclick='sortTableByName()' class='button'>Имя</button>
        <button onclick='sortTableByAge()' class='button'>Возраст</button>
        <br>
        <button onclick='reverseTable()' class='button'>По возрастанию</button>
        <button onclick='reverseTable()' class='button'>По убыванию</button>
      </div>

      <div class='control__view'>
        <p>Вид</p>
        <button onclick='changeView(tableHtml)' class='button'>Таблица</button>
        <button onclick='changeView(previewHtml)' class='button'>Превью</button>
        <br>
        <button onclick='changeView(tableHtml)' class='button'>рус</button>
        <button onclick='changeLang(tableHtmlEn)' class='button'>en</button>
      </div>
    </div>
  `

  tableHtml += `<ul class='people people__list'>`;
    data.map(person => (
    tableHtml += 
    `
      <li class='person person__info'>
        <div class='person__photo'></div>
        <p class='person__name'>${person.name.ru}</p>
        <p class='person__age'>${person.age}лет</p>
        <p class='person__phone'>${person.phone}</p>
        <div class='person__favor'><input type='checkbox'></input></div>
      </li>
    `
  ))

  tableHtml += `</ul>`;

  return tableHtml;
};

const getPreview = (data) => {

  previewHtml = 
  `
    <div class='control'>
      <div class='control__sort'>
        <p>Сортировка</p>
        <button onclick='sortPreviewById()' class='button'>ID</button>
        <button onclick='sortPreviewByName()' class='button'>Имя</button>
        <button onclick='sortPreviewByAge()' class='button'>Возраст</button>
        <br>
        <button onclick='reversePreview()' class='button'>По возрастанию</button>
        <button onclick='reversePreview()' class='button'>По убыванию</button>
      </div>

      <div class='control__view'>
        <p>Вид</p>
        <button onclick='changeView(tableHtml)' class='button'>Таблица</button>
        <button onclick='changeView(previewHtml)' class='button'>Превью</button>
        <br>
        <button onclick='changeView(previewHtml)' class='button'>рус</button>
        <button onclick='changeLang(previewHtmlEn)' class='button'>en</button>
      </div>
    </div>
  `

  previewHtml += `<div class='preview preview__list'>`;
  data.map(person => (
    previewHtml += 
    `
      <div class='preview__info'>
        <div class='preview__wrap'>
          <div class='preview__wrap-inner'>
            <div class='preview__photo'></div>
            <p class='preview__name'>${person.name.ru}</p>
          </div>
          <div class='preview__favor'><input type='checkbox'></input></div>
        </div>
        <p class='preview__age'>${person.age}лет</p>
        <p class='preview__phone'>${person.phone}</p>
        <p class='preview__phrase'>${person.phrase.ru}</p>
      </div>
    `
  ))
  previewHtml += `</div>`

  return previewHtml;
};

const render = (data) => {

  let html = '';

  changeLang = (data) => {
    document.getElementById("root").innerHTML = data;
  }

  changeView = (data) => {
    document.getElementById("root").innerHTML = data;
  }

  // ------------------Table sorting----------------------

  sortTableById = () => {
    data.sort((a, b) => a.id - b.id);
    let table = getTable(data);
    document.getElementById("root").innerHTML = table;
  }

  sortTableByName = () => {
    data.sort((a, b) => a.name.ru.toString().localeCompare(b.name.ru));
    let table = getTable(data);
    document.getElementById("root").innerHTML = table;
  }

  sortTableByAge = () => {
    data.sort((a, b) => a.age - b.age);
    let table = getTable(data);
    document.getElementById("root").innerHTML = table;
  }

  reverseTable = () => {
    data.reverse();
    let table = getTable(data);
    document.getElementById("root").innerHTML = table;
  }

    // ------------------Preview sorting----------------------

  sortPreviewById = () => {
    data.sort((a, b) => a.id - b.id);
    let preview = getPreview(data);
    document.getElementById("root").innerHTML = preview;
  }

  sortPreviewByName = () => {
    data.sort((a, b) => a.name.ru.toString().localeCompare(b.name.ru));
    let preview = getPreview(data);
    document.getElementById("root").innerHTML = preview;
  }

  sortPreviewByAge = () => {
    data.sort((a, b) => a.age - b.age);
    let preview = getPreview(data);
    document.getElementById("root").innerHTML = preview;
  }

  reversePreview = () => {
    data.reverse();
    let preview = getPreview(data);
    document.getElementById("root").innerHTML = preview;
  }

  // ---------------search by field with name---------------

  const handleSearch = function(event) {
    event.preventDefault();

    let searchTerm = event.target.elements['search'].value;

    let tokens = searchTerm
      .toLowerCase()
      .split(' ')
      .filter(function(token){
        return token.trim() !== '';
      });
   if(tokens.length) {

    const searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    const filteredList = data.filter(function(person){

      let personString = '';
      for(let key in person) {
        if(person.hasOwnProperty(key) && person[key] !== '') {
          personString += person.name.ru.toString().toLowerCase().trim() + ' ';
        }
      }

      return personString.match(searchTermRegex);
    });

    render(filteredList);
   }
  };

  document.addEventListener('submit',handleSearch);

  html+=getTable(data);
  html+=getPreview(data);
  html+=getTableInEnglish(data)
  html+=getPreviewInEnglish(data)

  document.getElementById("root").innerHTML = html;

  return data;
}

getPeople().then(json => render(json))