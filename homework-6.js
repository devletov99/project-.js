// №1 Создайте объект на основе ваших данных.

const userData = {
  name: 'Нурбек',
  surname: 'Девлетов',
  mail: 'ndevletov5@gmail.com',
  work: 'временно безработный',
  age: '22',
  country: 'Россия',
  city: 'Буйнакск' 
}

// №2 Создайте объект, который будет хранить данные об автомобиле.

const carData = {
  brand: 'lada',
  model: 'priora',
  year: 2007,
  color: 'серебристый',
  transmission: 'механика',
  owner: userData.name, 
}

// №3 Функция которая проверяет есть ли свойство 'максимальная скорость'.

const getPropertyTopSpeed = property => {
    if(property.topSpeed) {
      return true;
  } else {
      return property.topSpeed = 180;
  }  
};

getPropertyTopSpeed(carData)

// №4 Функция, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое выводит его значение.

const getObjectProperty = (object, propertyAge) => {
  return [object, propertyAge]
}

console.log(getObjectProperty (userData, userData.age));

// №5 Массив который содержит название продуктов.

const products = ['хлеб', 'молоко', 'мясо', 'конфеты']

// №6 Массив, состоящий из объектов, где объект представляет собой книгу. И добавить ещё одну книгу методом push.

const listBooks = [
  {
    title: 'война и мир',
    author: 'Лев Николаевич Толстой',
    yearRelease: 1869,
    genre: 'роман-эпопея',
    authorFrom: 'Российская империя',
  },
  {
    title:'Евгений Онегин',
    author: 'Александра Сергеевича Пушкина',
    yearRelease: 1833,
    genre: 'роман',
   authorFrom: 'Российская империя',
  },
  {
    title: 'Герой нашего времени',
    author: 'Михаил Лермонтов',
    yearRelease: 1839,
    genre: 'роман',
   authorFrom: 'Российская империя'
  },
]
listBooks.push(
   {
    title: 'Жизнь взаймы',
    author: 'Эрих Мария Ремарк',
    yearRelease: 1961,
    genre: 'психологический роман',
    authorFrom: 'Германская империя',
  }
)

// №7 массив, состоящих из тех же книг, но относящийся к определенной вселенной и объединие этих массивов с оператором spread.

const universeBooks = [
  {
    title: 'Гарри Поттер и Тайная комната',
    author: 'Дж. К. Роулинг',
    yearRelease: 1998,
    genre: 'роман',
    authorFrom: 'Британия',
  },
  {
    title: 'Мстители: Поступь рока',
    author: 'Лиза Палмер',
    yearRelease: 2019,
    genre: 'фантастика',
    authorFrom: 'США',
  },
]
const mergeArrays = [...listBooks, ...universeBooks]
console.log(mergeArrays)

// №8 С методом массива map установить редкую книгу(true, false).

const GetIsRare = universeBooks.map(function (book) {
    if (book.yearRelease >= 2000 ) {
      return 'true'
  } else { 
      return 'false'
  }
})
