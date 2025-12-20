import "./Drink.js";
import { Cafe } from "./Cafe.js";
import { Tea } from "./Tea.js";
import { HotChocolate } from "./HotChocolate.js";
import { Coffee } from "./coffee.js";

const cafe = new Cafe ('Terassa', 'Буйнакс')
console.log(cafe.getCafeInfo())

const tea = new Tea ('Чай', 150, 4.0, 85, 'Зелённый чай', 'Индия', 'Тмин')
console.log(cafe.orderDrink(tea))
console.log(tea)