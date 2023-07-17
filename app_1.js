// 1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
function initName(name){
    const nameArray = name.split(" ")
    return nameArray[0][0]+"."+ nameArray[1][0] +"."+nameArray[2][0]+"."
}
const firstLetters = userNames.map(initName)
let initials = firstLetters.sort()
console.log(initials)

