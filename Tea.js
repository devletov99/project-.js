import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, weight, price, temperature, teaType, origin, additives) {
    super(name, weight, price, temperature);
    this.teaType = teaType;
    this.origin = origin;
    this.additives = additives;
  }
}