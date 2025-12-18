export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.menu = [];
  }

  getCafeInfo() {
    return `Cafe: ${this.name}, Location: ${this.location}`;
  }

  orderDrink(drink) {
    return `Ваш заказ:  ${drink.getDrinkInfo()}`;
  }
}