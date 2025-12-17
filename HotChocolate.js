import {Drink} from "./Drink.js";

class HotChocolate extends Drink {
  constructor(name, weight, price, temperature, chocolateType, milkType, spices) {
    super(name, weight, price, temperature);
    this.chocolateType = chocolateType;
    this.milkType = milkType;
    this.spices = spices;
  }
}