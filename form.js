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
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    const isFormValid = this.form.checkValidity();
    if (!isFormValid) {
      this.form.reportValidity();
      return false;
    }
    return true;
  }

  handleSubmit() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    console.log(data) 

    this.form.reset();
  }
}

const form = new Form('regist-form')