// .map() is very much similar to .forEach() method, except for the fact, that instead of returning items out of the array, it return the array itself.

// But what sense does it make if it returns the array itself?

// .map() is used to iterate over the array, and do some manipulation in it with the items and then after doing that so, returns the manipulated array.


var names = [
    'Denium',
    'Alice',
    'Bob',
    'Supermarket'
]

// using original map
const originalMapNames = names.map(function (name) {
    return name;
})

console.log(originalMapNames);

// Map Polyfil
Array.prototype.myMap = function (callback) {
    var arr = [] // since, we need to return an array
    for (var i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
    }
    return arr // finally returning the array
}

// using Polyfil of map
const polyfilMapNames = names.myMap(function (name) {
    return name
})

console.log(polyfilMapNames);