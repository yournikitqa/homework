// string - тип строк 

const instrumentString = 'Инструмент'
const boxString = 'ящике'

console.log(`${instrumentString} лежит в ${boxString}`)

// number - тип чисел

let instrumentNumber = 10

console.log(instrumentNumber)

// boolean - логический тип

const userBoolean = 'User'
const ageBoolean = '25'
const isAdminBoolean = true
console.log(`${userBoolean} admin: ${isAdminBoolean}`)

// typeof - определение типа переменной

console.log(typeof(instrumentString))
console.log(typeof(isAdminBoolean))

// undefined - тип, обозначающий, что значение переменной не присвоено

let fooUndefined
console.log(fooUndefined)

//null - тип, который показывает, что значения вообще нет

let sumNull = null
sumNull = 5 + 5

// bigint - тип для огромных чисел

