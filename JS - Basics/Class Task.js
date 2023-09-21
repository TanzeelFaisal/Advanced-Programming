let animals = ['dog', 'cat', 'dog', 'cow']

// animals.reduce( (obj, value) => {
//         obj[value] = 1
//     }, 0
// )

// reduce(accumulator, value, index, array) // Callback function for reduce
let animalsObj = animals.reduce((obj, value) => {
    if (obj[value]) obj[value]++
    else obj[value] = 1
    return obj
}, {})

console.log(animalsObj)