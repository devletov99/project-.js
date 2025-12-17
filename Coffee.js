import { Drink } from "./Drink.js";

class Coffee extends Drink {
  constructor(name, weight, price, temperature, grainsType, roastLevel, origin, milkType) {
    super(name, weight, price, temperature);
    this.grainsType = grainsType;
    this.roastLevel = roastLevel;
    this.origin = origin;
    this.milkType = milkType;
  }
}