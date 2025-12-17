import {Drink} from "./Drink.js";
import {Tea} from "./Tea.js";

class Cafe {
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

// const cafe = new Cafe('Terassa', 'Буйнакск');
// console.log(cafe.getCafeInfo());
// const tea = new Tea('Зеленый чай', 250, 4.0, 75, 'Зеленый', 'Заварной', 'Китай', 'Мед');
// console.log(cafe.orderDrink(tea));