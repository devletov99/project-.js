import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, weight, price, temperature, teaType, brewType, origin, additives) {
    super(name, weight, price, temperature);
    this.teaType = teaType;
    this.brewType = brewType;
    this.origin = origin;
    this.additives = additives;
  }
}