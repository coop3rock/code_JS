// 3. Задача на розворот числа:

const currentMaxValue = 4589;
let valueStr = currentMaxValue + ""
let valueArray = valueStr.split("");
let valueReverse = valueArray.reverse();
let reverseStr = valueReverse.join("");
let reverseMaxValue = +reverseStr;
console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue); 



// Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
const array = resultsArray.flat(Infinity)
const result = array.reduce(function(acc, item){
    return acc * item;
}, 1)
let productOfArray=result;
console.log(productOfArray); 