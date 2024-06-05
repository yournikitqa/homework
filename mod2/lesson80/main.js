// let i = 0

// while (i < 10) {
//     i++
//     console.log(i)
// }

// do {
//     i++
//     console.log(i)
// } while (i < 5)

// for (let i = 1; i <= 10; i = i + 2) {
//     console.log(`Пройден ${i} круг`)
// }

for (let iFirst = 2; iFirst <= 12; iFirst = iFirst + 2) {
    console.log (iFirst)
}

console.log('Первый вариант 1 задания')

let iSecond = 0
while (iSecond <= 12) {
    if (iSecond % 2 == 0 && iSecond != 0) {
        console.log(iSecond)
    }
    iSecond++
}

console.log('Второй вариант 1 задания')

for (let iThird = 10; iThird > 0; iThird--) {
    console.log(iThird)
}

console.log('Первый вариант 2 задания')

let iFourth = 10
while (iFourth > 0) {
    console.log(iFourth)
    iFourth--
}

console.log('Второй вариант 2 задания')