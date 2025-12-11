class Form {
  constructor(registForm, userData = {}) {
    this.formId = registForm;
    this.form = document.getElementById(registForm)

    this.userData = {
      userName: userData.userName,
      userSurname: userData.userSurname,
      userBirth: userData.userBirth,
      userLogin: userData.userLogin,
      userPassword: userData.userPassword,
      confirmPassword: userData.confirmPassword,
    }

    this.init()
  }

  init() {
    if(!this.form) {
      console.log(`Form: форма с id: '${this.registForm}' не найдена`);
      return;
    }

    this.setFormValues();
    this.addSubmitHandler(); 
  }

  setFormValues() {
    const nameInput = this.form.querySelector('[name="userName"]');
    const surnameInput = this.form.querySelector('[name="userSurname"]');
    const birthInput = this.form.querySelector('[name="userBirth"]');
    const loginInput = this.form.querySelector('[name="login"]');
    const passwordInput = this.form.querySelector('[name="password"]');
    const confirmPasswordInput = this.form.querySelector('[name="confirmPassword"]');
  }

  addSubmitHandler () {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    console.log('Элементы формы:', this.form.elements);

    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    if (data.password !== data.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    console.log(data);

    this.form.reset();
  }
}

const form = new Form('registForm')