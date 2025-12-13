class Form {
  constructor(formId) {
    this.formId = formId;
    this.form = document.getElementById(formId)

    this.init();
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
      if (this.validate()) {
       this.handleSubmit();
      }
    });
  }

  validate() {
    let isValid = true;
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    for (let element of this.form.elements) {
      if (element.required && !element.value.trim()) {
        isValid = false;
        element.classList.add('input-error');
        return;
      } else {
        element.classList.remove('input-error');
      }
    }
    return isValid;
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