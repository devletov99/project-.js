async function getUsers() {
  console.log('Загрузка пользователей...');

    if (!localStorage.getItem('users')) {
      const response = await fetch('./users.json');
      const users = await response.json();

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            localStorage.setItem('users', JSON.stringify(users));
            resolve(users);
        }
          catch (error) {
            reject(new Error('Ошибка при загрузке пользователей'));
          }
        },3000);
      })  
      return users;
    } 
    else {
      console.log('пользователи уже загружены');
    } 
};

async function renderUsers() {
  const users = await getUsers() || JSON.parse(localStorage.getItem('users') || '[]');
  
  const userTemplate = document.getElementById('user-template');
  const userList = document.getElementById('users');

  const loading = document.getElementById('loading-container');

  try {
      await new Promise((resolve, reject) => {
      setTimeout(() => {
        loading.style.display = 'none';

        users.forEach(user => {
          const userClone = userTemplate.content.cloneNode(true);
          userClone.querySelector('.user-img').src = `../img/${ user.img }.jpg`;
          userClone.querySelector('.user-id').textContent = `id: ${user.id}`
          userClone.querySelector('.user-name').textContent = `Имя: ${user.name}`;
          userClone.querySelector('.user-surname').textContent = `Фамилия: ${user.surname}`;
          userClone.querySelector('.user-email').textContent = `Электронная почта: ${user.email}`;
          userClone.querySelector('.user-age').textContent = `Возраст: ${user.age}`;
          userList.appendChild(userClone);
        });
        resolve();
      }, 3000);
    })
  }

  catch {
    console.error(new Error ('Ошибка при рендеринге пользователей:'));
  }
}

renderUsers();

// Кнопка для удаления определенной карточки

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('btn-delete-user')) return;
  
  const userContainer = event.target.closest('.user-container');
  const userId = Number(userContainer.dataset.id);

  const user = JSON.parse(localStorage.getItem('users'));
  const updatedUsers = user.filter(user => user.id !== userId);

  localStorage.setItem('users', JSON.stringify(updatedUsers));
  userContainer.remove();
});

//Кнопка для удаления всех карточек

const btnDeleteUsers = document.getElementById('btn-delete-them');
userCards = document.getElementById('users');

btnDeleteUsers.addEventListener('click', () => {
  userCards.classList.add('users-delete');
});

// Кнопка для получения всех карточек

const btnShowUsers = document.getElementById('btn-show-all');

btnShowUsers.addEventListener('click', () => {
  userCards.classList.remove('users-delete');
});