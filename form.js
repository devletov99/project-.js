class Form {
  constructor(formId) {
    this.formId = formId;
    this.form = document.getElementById(formId)

    this.init()
  }
  init() {
    if(!this.form) {
      console.log(`Form: форма с id: '${this.formId}' не найдена`);
      return;
    }

    this.addSubmitHandler(); 
  }
  addSubmitHandler () {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.handleSubmit();
    });
  }
  handleSubmit() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    if (data.password !== data.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    console.log(data) 

    this.form.reset();
  }
}
const form = new Form('registForm')