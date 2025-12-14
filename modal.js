class Modal {
  constructor(modalId, openBtnId, closeBtnId, overlayId) {
    this.openBtn = document.getElementById(openBtnId);
    this.closeBtn = document.getElementById(closeBtnId);
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById(overlayId)

    this.init();
  }

  init() {
    if (!this.modal) {
      console.error(`Modal: элемент с id ${this.modal} не найден`);
      return;
    }

    this.setupEvents();
  }
  setupEvents() {
    if(this.openBtn){
      this.openBtn.addEventListener('click', (event) =>{
        event.preventDefault();
        this.open();
      });
    }

    if(this.closeBtn) {
      this.closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        this.close();
      });
    }
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay');
    this.overlay.style.display = 'block';

  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay');
  } 

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }
}