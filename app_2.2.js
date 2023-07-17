// 2. Задача на фільтрування масиву

// 2ий спосіб "через вбудований метод масивів"

const useNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let vowels = /^[АОУИЕІЮЯЇ]/;
let filteredNames = useNames.filter(function(name) {return vowels.test(name)});
console.log(filteredNames);
