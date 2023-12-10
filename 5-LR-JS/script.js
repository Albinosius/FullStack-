// Функция для загрузки списка пользователей с сервера
const userList = document.getElementById('userList');
const userInfo = document.getElementById('userInfo');
const page1Button = document.getElementById('page1');
const page2Button = document.getElementById('page2');

let currentPage = 1;

function loadUserList(page) {
  fetch(`https://reqres.in/api/users?page=${page}`)
    .then(response => response.json())
    .then(data => {
      userList.innerHTML = '';
      data.data.forEach(user => {
        const listItem = document.createElement('div');
        userList.appendChild(listItem);
        listItem.classList.add("user");
        
        listItem.innerHTML = `<div class="user-item">${user.first_name}</div> <div class="user-item">${user.last_name}</div> <button class="deleteButton" data-id="${user.id}">Удалить</button>`;
      });
      addDeleteButtonListeners();
    });
}

// Функция для загрузки подробной информации о пользователе по его id
function loadUserInfo(userId) {
  fetch(`https://reqres.in/api/users/${userId}`)
    .then(response => response.json())
    .then(data => {
      userInfo.innerHTML = `Имя: ${data.data.first_name}<br>Фамилия: ${data.data.last_name}<br>Email: ${data.data.email}<br>Аватар:<br><img src="${data.data.avatar}" alt="Аватар пользователя">`;
    });
}

// Функция для добавления слушателей событий на кнопки удаления
function addDeleteButtonListeners() {
  const deleteButtons = document.getElementsByClassName('deleteButton');
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function() {
      const userId = this.dataset.id;
      deleteUser(userId);
    });
  }
}

// Функция для удаления пользователя из списка
function deleteUser(userId) {
  const listItem = document.querySelector(`div button[data-id="${userId}"]`).parentElement;
  listItem.remove();
}

// Функция для переключения между страницами списка
function switchPage(page) {
  currentPage = page;
  loadUserList(currentPage);
}

// Обработчики событий для кнопок переключения страниц
page1Button.addEventListener('click', function() {
  switchPage(1);
});

page2Button.addEventListener('click', function() {
  switchPage(2);
});

// Обработчик события для списка пользователей
userList.addEventListener('click', function(event) {
  
  const target = event.target;

  console.log("target",target);
  if (target.classList.contains('deleteButton')) {
    return;
  }

  if (target.classList.contains("user")) {
    const listItem = target.closest('div');
    const userId = listItem.querySelector('.deleteButton').dataset.id;
    loadUserInfo(userId);
  } else if (target.classList.contains("user-item")) {
    const listItem = target.closest('div');
    var parentElement = target.parentNode;
    const userId = parentElement.querySelector('.deleteButton').dataset.id;
    loadUserInfo(userId);
  }

  
  
});

// Загрузка первой страницы списка при запуске приложения
loadUserList(currentPage);





// function loadUsers(page) {
//   $.ajax({
//       url: `https://reqres.in/api/users?page=${page}`,
//       method: 'GET',
//       success: function(data) {
//           // Очищаем список перед загрузкой новых данных
//           $('#user-list').empty();
          
//           // Добавляем каждого пользователя в список
//           data.data.forEach(function(user) {
//               $('#user-list').append(`<li class="user"><div class="first-name">${user.first_name}</div> <div class="last-name">${user.last_name}</div></li>`);
//           });
//       },
//       error: function() {
//           console.log('Ошибка при загрузке списка пользователей');
//       }
//   });
// }

// // Обработчик нажатия на кнопку первой страницы
// $('#page1-btn').click(function() {
//   loadUsers(1);
// });

// // Обработчик нажатия на кнопку второй страницы
// $('#page2-btn').click(function() {
//   loadUsers(2);
// });

// // По умолчанию загружаем первую страницу
// loadUsers(1);