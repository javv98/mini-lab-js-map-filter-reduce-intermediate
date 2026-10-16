// =============================================================================
// Mini LAB | Map, Filter & Reduce — Intermedio
// =============================================================================

const { startTransition } = require("react")

// =============================================================================
// ITERACION 1 — .map() intermedio
// =============================================================================

// 1. celsiusToFahrenheit(temps)
// Convierte un array de temperaturas en Celsius a Fahrenheit.
// Formula: C * 9/5 + 32
//
// Ejemplo:
//   celsiusToFahrenheit([0, 100, 37]) → [32, 212, 98.6]
//   celsiusToFahrenheit([-40]) → [-40]
function celsiusToFahrenheit(temps) {
  return temps.map(temperature => temperature * 9/5 + 32)
}

// 2. addFullName(people)
// Recibe un array de objetos { firstName, lastName } y devuelve un nuevo array
// donde cada objeto tiene una propiedad adicional fullName con el nombre completo.
//
// Ejemplo:
//   addFullName([{ firstName: "Ana", lastName: "Garcia" }])
//   → [{ firstName: "Ana", lastName: "Garcia", fullName: "Ana Garcia" }]
function addFullName(people) {
  return people.map(person => {
    let newPerson = {
    firstName: person.firstName,
    lastName: person.lastName,
    fullName: `${person.firstName} ${person.lastName}`}
    return newPerson
  })
}

// 3. getAcronyms(phrases)
// Extrae las iniciales de cada frase para formar un acronimo en mayusculas.
// Cada frase tiene palabras separadas por espacios.
//
// Ejemplo:
//   getAcronyms(["as soon as possible", "frequently asked questions"]) → ["ASAP", "FAQ"]
//   getAcronyms(["do it yourself"]) → ["DIY"]
function getAcronyms(phrases) {
  return phrases.map(phrase => {
    let arrSeparate = phrase.split(" ")
    let initials = arrSeparate.map(word => word[0].toUpperCase())
    let finalAcronym = initials.join("")
    return finalAcronym
  })
}

// 4. applyDiscount(products, discount)
// Recibe un array de { name, price } y un porcentaje de descuento.
// Devuelve un nuevo array con el precio rebajado y el precio original guardado.
//
// Ejemplo:
//   applyDiscount([{ name: "Libro", price: 20 }], 10)
//   → [{ name: "Libro", price: 18, originalPrice: 20 }]
//   applyDiscount([{ name: "Cafe", price: 5 }], 50)
//   → [{ name: "Cafe", price: 2.5, originalPrice: 5 }]
function applyDiscount(products, discount) {
  return products.map(product => {
    let newProduct = {
      name: product.name,
      price: (product.price * (1 - discount/100)),
      originalPrice: product.price,
    }
    return newProduct
  })
}


// =============================================================================
// ITERACION 2 — .filter() intermedio
// =============================================================================

// 5. getInStock(products)
// Filtra productos que tienen stock mayor que 0.
//
// Ejemplo:
//   getInStock([{ name: "A", stock: 5 }, { name: "B", stock: 0 }])
//   → [{ name: "A", stock: 5 }]
function getInStock(products) {
  return products.filter (product => product.stock > 0)
}

// 6. getUniqueValues(array)
// Devuelve un array sin duplicados usando filter e indexOf.
// No uses Set ni ningun otro metodo — solo .filter() + .indexOf().
//
// Ejemplo:
//   getUniqueValues([1, 2, 2, 3, 3, 3]) → [1, 2, 3]
//   getUniqueValues(["a", "b", "a", "c"]) → ["a", "b", "c"]
function getUniqueValues(array) {
  let aux = []
  return array.filter(value => {
    if (!(aux.includes(value))) {
      aux.push(value)
      return true
    } else if (aux.includes(value)) {
      return false
    }
  }) // JAVI: He usado una variable auxiliar que va almacenando los elementos ya usados y el bucle analiza si el elemento está ahí o no, en el caso de que esté no lo vuelve a incluir ya que significa que se ha incluido anteriormente.
}

// 7. searchByName(items, query)
// Filtra objetos cuya propiedad name incluya el query (case insensitive).
//
// Ejemplo:
//   searchByName([{ name: "JavaScript" }, { name: "Java" }, { name: "Python" }], "java")
//   → [{ name: "JavaScript" }, { name: "Java" }]
function searchByName(items, query) {
  return items.filter( item => {
    queryMay = query.toUpperCase()
    nameMay = item.name.toUpperCase()
    return nameMay.includes(queryMay)
  })
}

// 8. getInRange(numbers, min, max)
// Filtra numeros que estan dentro de un rango (inclusive por ambos extremos).
//
// Ejemplo:
//   getInRange([5, 10, 15, 20, 25], 10, 20) → [10, 15, 20]
//   getInRange([1, 2, 3, 4, 5], 2, 4) → [2, 3, 4]
function getInRange(numbers, min, max) {
  return numbers.filter (number => number >= min && number <= max)
}


// =============================================================================
// ITERACION 3 — .reduce() intermedio
// =============================================================================

// 9. getLongestString(strings)
// Devuelve el string mas largo del array usando reduce.
// Si hay empate, devuelve el primero que encuentre.
//
// Ejemplo:
//   getLongestString(["sol", "estrella", "luna"]) → "estrella"
//   getLongestString(["ab", "cd"]) → "ab"
function getLongestString(strings) {
  return strings.reduce((acc, el) => {
    if (el.length > acc.length) {
      acc = el
    }
    return acc
  }, "")
}

// 10. buildObject(keys, values)
// Combina dos arrays (claves y valores) en un unico objeto usando reduce.
// Los arrays siempre tienen la misma longitud.
//
// Ejemplo:
//   buildObject(["name", "age"], ["Ana", 25]) → { name: "Ana", age: 25 }
//   buildObject(["a", "b", "c"], [1, 2, 3]) → { a: 1, b: 2, c: 3 }
function buildObject(keys, values) {
  return keys.reduce((acc, el, index) => {
    acc[el] = values[index]
    return acc
  }, {})
}

// 11. calculateAverage(numbers)
// Calcula la media aritmetica de un array de numeros usando reduce.
// Si el array esta vacio, devuelve 0.
//
// Ejemplo:
//   calculateAverage([10, 20, 30]) → 20
//   calculateAverage([]) → 0
function calculateAverage(numbers) {
  return numbers.reduce((acc, el, index, arr) => {
    acc += el
    if (index === arr.length - 1) {
      acc = acc/arr.length
    }
    return acc
  }, 0)
}

// 12. mergeObjects(arrayOfObjects)
// Fusiona un array de objetos en un unico objeto usando reduce.
// Si hay claves repetidas, el ultimo valor sobreescribe al anterior.
//
// Ejemplo:
//   mergeObjects([{ a: 1 }, { b: 2 }, { a: 3, c: 4 }]) → { a: 3, b: 2, c: 4 }
//   mergeObjects([{ x: 10 }, { y: 20 }]) → { x: 10, y: 20 }
function mergeObjects(arrayOfObjects) {
  return arrayOfObjects.reduce((acc, el) => {
    let keys = Object.keys(el)
    let values = Object.values(el)
    for (let i = 0; i < keys.length; i++) {
      acc[keys[i]] = values[i]
    }
    return acc
  }, {})
}


// =============================================================================
// ITERACION 4 — Combinando metodos
// =============================================================================

// 13. getTopStudents(students, minGrade)
// Filtra estudiantes con grade >= minGrade y devuelve sus nombres formateados
// como "APELLIDO, Nombre" (apellido en mayusculas).
//
// Ejemplo:
//   getTopStudents(
//     [{ firstName: "Ana", lastName: "Garcia", grade: 9 },
//      { firstName: "Luis", lastName: "Lopez", grade: 4 }],
//     5
//   )
//   → ["GARCIA, Ana"]
function getTopStudents(students, minGrade) {
  return students
  .filter(student => student.grade >= minGrade)
  .map(student => {
    return student.lastName.toUpperCase() + ", " + student.firstName
  })
}

// 14. getTotalCartPrice(cart)
// Recibe un array de { name, price, quantity }, calcula el precio total
// (price * quantity para cada item, luego suma todo).
//
// Ejemplo:
//   getTotalCartPrice([
//     { name: "Libro", price: 10, quantity: 2 },
//     { name: "Pen", price: 1, quantity: 5 }
//   ])
//   → 25
function getTotalCartPrice(cart) {
  return cart
  .map(item => item.price * item.quantity)
  .reduce((acc, el) => {
    acc += el
    return acc
  }, 0)
}

// 15. getWordFrequencies(text)
// Recibe un string, lo separa en palabras (split por espacio), las pasa a
// minusculas, y cuenta cuantas veces aparece cada palabra. Devuelve un array
// de { word, count } ordenado por count de mayor a menor.
//
// Ejemplo:
//   getWordFrequencies("Hola mundo hola") → [{ word: "hola", count: 2 }, { word: "mundo", count: 1 }]
//   getWordFrequencies("a b a b a") → [{ word: "a", count: 3 }, { word: "b", count: 2 }]
function getWordFrequencies(text) {
  return text
  .toLowerCase() // ["hola", "mundo", "hola"]
  .split(" ") // ["Hola", "mundo", "hola"]
  .reduce((acc, el, i, arr) => {
    if (i === arr.indexOf(el) && text !== ""){
      let count = 0
      for (let word of arr) {
        if (el === word) {
          count += 1
        }
      }
      acc.push({word: el, count: count})
    }
    return acc
  }, [])
}
