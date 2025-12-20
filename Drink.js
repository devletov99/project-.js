export class Drink {
  #temperatureInfo;

  constructor(name, weight, price, temperature) {
    this.name = name;
    this.weight = weight;
    this.price = price;
    this.#temperatureInfo = temperature; 
    this.#setTemperatureDrink(temperature)
  }

  getDrinkInfo() {
    return `Drink: ${this.name}, Weight: ${this.weight}ml, Price: $${this.price}, Temperature: ${this.#temperatureInfo}°C`;
  }

  getTemperature(newTemperature) {
    this.#temperatureInfo = newTemperature;
    return this.#setTemperatureDrink();
  }

  #setTemperatureDrink(temperatureDrink) {
    if (temperatureDrink <= 0 || temperatureDrink >= 100) {
      throw new Error('ТЕМПЕРАТУРА ДОЛЖНА БЫТЬ В ДИАПАЗОНЕ ОТ  0 ДО 100');
    }
   
    if (temperatureDrink <= 20) {
      return "прохладный";
    }
    if (temperatureDrink <= 60) {
      return "теплый";
    }
    if (temperatureDrink <= 80) {
      return "горячий";
    }
  }

  #prepareDrink() {
    const prepSteps = [
      `Приготовление напитка ${this.name}`,
      `Нагреваем до ${this.#temperatureInfo}°C`,
      `Напиток ${this.name} готов к подаче!`,
    ]
    return prepSteps.join('\n');
  }

  serveDrink() {
    return `${this.#prepareDrink()}\nПодача напитка ${this.name}. Приятного аппетита!`;
  }
}