class Modal {
  constructor(modalId, openBtnId, closeBtnId, overlayId) {
    this.modalId = modalId;
    this.openBtnId = openBtnId;
    this.closeBtnId = closeBtnId;
    this.overlayId = overlayId;

    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById(overlayId)
    this.init();
  }
  init() {
    if (!this.modal) {
      console.error(`Modal: элемент с id '${this.modalId}' не найден`);
      return;
    }
    this.openBtn = document.getElementById(this.openBtnId)
    this.closeBtn = document.getElementById(this.closeBtnId)
    this.overlay = document.getElementById(this.overlayId)
    this.setupEvents();
  }
  setupEvents() {
    if(this.openBtn){
      this.openBtn.addEventListener('click', (event) =>{
        event.preventDefault();
        this.open();
      });
    }
    if(this.closeBtn){
      this.closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        this.close();
      });
    }
  }
  open() {
    this.modal.classList.add('modal-showed')
    this.overlay.classList.add('overlay');
    this.overlay.style.display = 'block';
  }
    close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay');
  } 
  isOpenByClass() {
    return this.modal.classList.contains('modal-showed');
  }
}
const modal = new Modal('modalId', 'openBtn', 'closeBtn', 'overlay')
