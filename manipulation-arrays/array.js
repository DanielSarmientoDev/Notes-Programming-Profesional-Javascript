/**
 * Methods Array
 */

let array = ['daniel', 'sarmiento', 'cuervo']
// toString convert array at String
console.log(array.toString())
// add "-" in element in the array
console.log(array.join('-'))
//conCat concatena

const persons = [
    { id: 1, nombre: 'Daniel', edad: 17 },
    { id: 2, nombre: 'Steven', edad: 14 },
]
// filter search element and return values assigned.
let id_person = persons.filter((a) => a.id == 2)
console.log('====================================')
console.log(id_person)
console.log('====================================')
//map return value especify for element
let years = persons.map((a) => a.edad)
console.log('====================================')
console.log(years)
console.log('====================================')
const colors = ['red', 'blue', 'yellow']
console.log('====================================')

let indexes_colors = colors.forEach((item, index) => console.log(item, index))
console.log('====================================')
