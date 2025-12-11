class Modal {
  constructor(options = {}) {
   const defaultOptions = {
    modalId: null,
    openBtn: null,
    closeBtn: null,
    overlayId: null,
   }

   this.options = { ...defaultOptions, ...options};

   this.init();
  }

  init() {
    this.modal = document.getElementById(this.options.modalId)

    if (!this.modal) {
      console.error(`Modal: элемент с id '${this.options.modalId}' не найден`);
      return;
    }

    this.openBtn = document.getElementById(this.options.openBtn)

    this.closeBtn = document.getElementById(this.options.closeBtn)

    this.overlay = document.getElementById(this.options.overlayId)

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


const modal = new Modal({
  modalId: 'modalId',
  openBtn: 'openBtn',
  closeBtn: 'closeBtn',
  overlayId: 'overlay'
})
