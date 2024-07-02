// const array = [1, 2, 3, 4]
// array.push(5)
// console.log(array.length)

const users = [
    {
        name: 'Max',
        age: 23
    },
    {
        name: 'Ivan',
        age: 25
    },
    {
        name: 'Rob',
        age: 12
    },
    
]

const usersName = []

users.forEach((user) => {
    usersName.push(user.name)
})

console.log(usersName)