import { userComments } from "./homework.js"

// Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const nombers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const moreFive = nombers.filter(num => num >= 5)

// создать массив сторк и проверить есть ли определённая сущность.

const kitchenDevices = ['нож', 'вилка', 'ложка', 'миксер', 'лопата', 'тёрка']
const knifeKevice = kitchenDevices.find(device => device === 'нож')
console.log(!!knifeKevice)

// Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный.

const changeOrderArray = kitchenDevices.reverse()

const changeOrderArrayNom = nombers.reverse()

// Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const mailFilter = userComments.filter(mail => mail.email.toLowerCase() .includes (".com"));

// Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const postId = userComments.map(user => ({ ...user, postId: user.id <= 5 ? 2:1 }))

 // Перебрать массив, что бы объекты состояли только из айди и имени

const arrayIdName = userComments.map(user => ({id: user.id, name: user.name}))

// Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const checkingBodyLength = userComments.map(object => ({...object, isInvalid: object.body.length > 180}))

// Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const getArrayEmails = userComments.reduce((result, user) => [...result, user.email], [])
console.log(getArrayEmails)

const arrayEmails = userComments.map(user => user.email)
console.log(arrayEmails)

// Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const receiveString = arrayEmails.toString()
console.log(receiveString)