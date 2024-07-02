// const users = {
//     alex: {
//         age: 23,
//         isAdmin: false
//     },
//     john: {
//         age: 20,
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(users.john)
// users.john.sayHello('Tom')

// const users = [
//     {
//         name: 'Alex',
//         age: 23,
//         isAdmin: false
//     },
//     {
//         name: 'John',
//         age: 20,
//         isAdmin: true
//     }
// ]

// users.push({
//     name: 'Ivan',
//     age: 30,
//     isAdmin: true
// })

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }

// const foo = 'Hello World'
// console.log(foo.toUpperCase)

// --------------

console.log('Задание 1')

const user1 = {
    name: 'Nikita',
    surname: 'Anosov',
    age: 25,
    city: 'Novosibirsk',
    country: 'Russia'
}

console.log(user1)

console.log('Задание 2')

const user2 = {
    name: 'Nikita',
    surname: 'Anosov',
    age: 25,
    city: 'Novosibirsk',
    country: 'Russia',
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

user2.sayHello(user2.name)

console.log('Задание 3')

let defaultUsers = 0
const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: true
    },
    {
        name: 'Leo',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Donald',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Sam',
        age: 23,
        isAdmin: true
    },
    {
        name: 'John',
        age: 25,
        isAdmin: false
    }
]

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        defaultUsers++
    }
}

console.log(defaultUsers)