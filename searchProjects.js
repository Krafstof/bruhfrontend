let mainwindowTitleContainer = document.getElementById("clickcker");
let url = "http://158.160.60.78"
let uri = `${url}/api/projects`
/*console.log(uri)
mainwindowTitleContainer.addEventListener('click', () => {
  fetch(`${uri}/?skip=0&limit=100`, {
   headers: {
      'Accept': 'application/json'
   }
})
   .then(response => response.text())
   .then(text => console.log(text))
});*/

// Создаем новый XMLHttpRequest объект
const xhr = new XMLHttpRequest();

// Открываем соединение с сервером
xhr.open('GET', uri, true);

// Устанавливаем заголовок для указания типа данных, которые мы ожидаем получить
xhr.setRequestHeader('Accept', 'application/json');

// Отправляем запрос на сервер
xhr.send();

// Обрабатываем ответ от сервера
xhr.onload = function() {
  // Парсим полученные данные в формате JSON
  const projects = JSON.parse(xhr.responseText);
  
  // Создаем новый элемент таблицы
  const mainWindow = document.getElementById('mainContent');
  const table = mainWindow.createElement('table');

  // Создаем заголовок таблицы
  const header = table.createTHead();
  const row = header.insertRow();
  const idCell = row.insertCell();
  const userIdCell = row.insertCell();
  const nameCell = row.insertCell();
  const descCell = row.insertCell();
  const budgetCell = row.insertCell();

  // Задаем названия заголовков
  idCell.innerText = 'ID';
  userIdCell.innerText = 'User ID';
  nameCell.innerText = 'Name';
  descCell.innerText = 'Description';
  budgetCell.innerText = 'Budget';

  // Создаем тело таблицы
  const body = table.createTBody();
  
  // Заполняем таблицу данными
  projects.forEach(function(project) {
    const row = body.insertRow();
    const idCell = row.insertCell();
    const userIdCell = row.insertCell();
    const nameCell = row.insertCell();
    const descCell = row.insertCell();
    const budgetCell = row.insertCell();

    // Заполняем ячейки таблицы значениями из объекта проекта
    idCell.innerText = project.id;
    userIdCell.innerText = project.user_id;
    nameCell.innerText = project.name;
    descCell.innerText = project.description;
    budgetCell.innerText = project.budget;
  });

  // Добавляем таблицу на страницу
  document.body.appendChild(table);
};
