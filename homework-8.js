import { products } from "./products.js";   

const productTemplate = document.querySelector('#product-template')
const productList = document.querySelector('#product-list')

// По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.

const renderProducts = (products) => {
  productList.innerHTML= '';
 
products.forEach(product => {
  const productClone = productTemplate.content.cloneNode(true);
  productClone.querySelector('.product-image').src = `/img/${product.img}.png`
  productClone.querySelector('.product-category').textContent = product.category
  productClone.querySelector('.product-name').textContent = product.name
  productClone.querySelector('.product-descripton').textContent = product.descripton
  productClone.querySelector('.product-compound').innerHTML = product.compound.map(item => `<li class = "product-compaund-item">${item}</li>`).join('')
  productClone.querySelector('.product-price').textContent = product.price
  productList.appendChild(productClone)
  })
} 

// Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const stringNameProduct = products.reduce((acc, product) => [ ...acc, product.name], "").join(';')

// Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const arrayObject = products.reduce((acc, product) => { acc[product.name] = product.descripton;
 return acc;
}, [])

// функция, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5".
 
const initializeCards = () => {
  const userInput = prompt('Сколько карточек отобразить? От 1 до 5');
  const numberOfCards = Number(userInput);

  if (isNaN(numberOfCards) || numberOfCards < 1 || numberOfCards > 5) {
    alert('Пожалуйста, введите число от 1 до 5');
    return;
  }
  
  const selectProduct = products.slice(0, numberOfCards);
  renderProducts(selectProduct)
}

initializeCards() 