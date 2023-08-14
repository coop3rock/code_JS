'use strict'
// 1. Задача на селектори


// — для елементу з текстом 'Навігація по DOM дереву'

// — для першого елементу <section>

// — для елементу списку з текстом 'Пункт 5'

// — для елементу з класом 'hatredLevelBlock'

// Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.

let navigateHeader = document.getElementById('headerTwo');
console.log(navigateHeader);

let firstSection = document.querySelector('section');
console.log(firstSection);

let itemFive = document.querySelectorAll("li") 
 for (let li of itemFive)
    if (li.textContent.includes('Пункт 5')) {
      console.log(li);
    };

let divWithClass = document.getElementsByClassName('hatredLevelBlock');
console.log(divWithClass);