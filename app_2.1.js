// 2. Задача на фільтрування масиву

// 1ий спосіб "через умовну конструкцію"
const userName = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const vowel = ['А', 'О', 'У', 'И', 'Е', 'І', 'Ю', 'Я', 'Ї'];
let filteredName = [];
for(i=0; i<userName.length; i++)
 if(vowel.includes(userName[i][0])){
    filteredName.push(userName[i]);
 }
console.log(filteredName);

