// поле для подписки.

const emailForm = document.getElementById('email-form')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const emailData = Object.fromEntries(formData.entries());
  console.log(emailData);
});

// форма регистрации.

let user = undefined;

const login = document.getElementById('login').value;
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password');
const registForm = document.getElementById('regist-form');

registForm.addEventListener('submit', (event) => {
  event.preventDefault();
    if (password.value !== confirmPassword.value) {
      alert('Пароли не совпадают');
  };
  const form = event.target;
  const data = new FormData(form);
  user = Object.fromEntries(data.entries());
  user.createdOn  = new Date();
  console.log(user);
});

// 8. Создать модальное окно, используя классы "modal, modal-showed". Логика такая: при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal. Не забываем добавить кнопку для закрытия модалки (крестик в углу).  
// Важные правила создания модалки:
// 1) Задний фон должен быть затемнён, но не полностью черный (Создаем класс overlay, который будет затемнять всю страницу)
// 2) Модальное окно находиться ровно по центру страницы, независимо от масштаба


const authenticationBtn = document.getElementById('authentication-bttn');
const containerModal = document.getElementById('container-modal');
const overlayContainer = document.querySelector('.container-overlay');

const openModalBtn = function() {
  containerModal.classList.add('modal-showed');
  overlayContainer.classList.add('overlay');
};

authenticationBtn.addEventListener('click', openModalBtn);

// для закрытия окна.

const btnClose = document.getElementById('close-btn');

btnClose.addEventListener('click', function() {
  containerModal.classList.remove('modal-showed')
  overlayContainer.classList.remove('overlay')
})

//9-10 форма авторизации.

let currentUser = undefined;

const hideModal = () => {
  containerModal.classList.remove('modal-showed')
  overlayContainer.classList.remove('overlay')
}

const formAuthoriz = document.getElementById('form-authorization')

formAuthoriz.addEventListener('submit', (event) => {
  const authorizPassword = document.getElementById('authorization-password').value
  const authorizLogin = document.getElementById('authorization-login').value
  event.preventDefault()
    if (authorizLogin === user.login && authorizPassword === user.password){
      alert('вы авторизовались');
      currentUser = user;
      currentUser.lastLogin = new Date();
      hideModal();
  } else{ 
      alert('Неправильно указан логин и/или пароль.')
  }
  console.log(currentUser)
})