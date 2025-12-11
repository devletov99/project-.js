import "./modal.js"
import "./form.js"

// Создать структуру на ваш выбор, как было показано в лекции. Придумайте свою структуру и реализуйте наследуемость классов.

class Laptop {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showInfo() {
    console.log(`${this.brand} ${this.model}`)
  }
}

class LaptopSpecifications extends Laptop {
  constructor(brand, model, processor, battery, memory) {
    super(brand, model);
    this.processor = processor;
    this.battery = battery;
    this.memory = memory;
  }

  showSpecifications() {
    console.log(`${this.brand}, ${this.model}, ${this.processor}, ${this.battery}, ${this.memory}`)
  }
}

const macBook = new Laptop('MacBook', 'pro 14')

const macBookSpecifications = new LaptopSpecifications('MacBook', 'pro 14', 'm4 pro', 72.4, 1024) 

macBookSpecifications.showSpecifications();