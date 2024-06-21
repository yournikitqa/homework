// // function sumNumbers(firstNumber, secondNumber) {
// //     return firstNumber + secondNumber
// // }

// // const result = sumNumbers(3, 10)
// // console.log(result)
// // console.log(sumNumbers(-2, 2))

// const users = ['John', 'Ann', 'Alex', 'Max']
// const numbers = [1, 2, 3]
// const checkForCopyItem = (array, item) => {
//     for(let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in the array'
// }

// console.log(checkForCopyItem(numbers, 2))

console.log('Первое задание')

function helloFunction(i) {
    return `Hello ${i}`
}
console.log(helloFunction('Nikita'))

console.log('Второе задание')
const numbers = [1, 20, 3, 41, 5, 6, 72, 8, -92]
function numbersMoreTheTen(array) {
    for (let z = 0; z < array.length; z++) {
        if (array[z] >= 10) {
            console.log(array[z])
        }
    }
}
console.log(numbersMoreTheTen(numbers))

console.log('Третье задание')
console.log('Выберите математическую операцию: +, -, *, /')
function calc(firstNumber, secondNumber, mathAction) {
    if (mathAction === '+') {
        answer = firstNumber + secondNumber
        return `${firstNumber} + ${secondNumber} = ${answer}`
    }
    if (mathAction === '-') {
        answer = firstNumber - secondNumber
        return `${firstNumber} - ${secondNumber} = ${answer}`
    }
    if (mathAction === '*') {
        answer = firstNumber * secondNumber
        return `${firstNumber} * ${secondNumber} = ${answer}`
    }
    if (mathAction === '/') {
        answer = firstNumber / secondNumber
        return `${firstNumber} / ${secondNumber} = ${answer}`
    }
}

console.log(calc(1,4,'*'))