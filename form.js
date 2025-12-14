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

  addSubmitHandler() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this.validate()) {
       this.getValues();
      }
    });
  }

  isValidateForm() {
    return this.form.checkValidity()
  }

  getValues() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    this.form.reset();

    return data;
  }
}