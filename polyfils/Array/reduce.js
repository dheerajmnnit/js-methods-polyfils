// reduce() function is used to reduce the array to a single value. 
// We'll again take the example of Logic's best work yet and combine all of them in a single line using .reduce() function.
// .reduce() accepts a callback function (accumulator, currentValue, index and array) and initial value


var albums = [
    'Bobby Tarantino',
    'The Incredible True Story',
    'Supermarket',
    'Under Pressure',
]

// using original reduce
var originalReduce = albums.reduce(function (a, b) {
    return a + ' , ' + b
}, 'Young Sinatra') // Here we are initialising the array with value as 'Young Sinatra'

console.log(originalReduce)
// Young Sinatra , Bobby Tarantino , The Incredible True Story , Supermarket , Under Pressure



// Polyfil Reduce
Array.prototype.myReduce = function (callback, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue

    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this)
        } else {
            accumulator = this[i]
        }
    }
    return accumulator
} // our polyfill for reduce

// using Polyfil of reduce
var polyfilReduce = albums.myReduce(function (a, b) {
    return a + ' , ' + b
}, 'Young Sinatra') // Initial Value is Young Sinatra

console.log(polyfilReduce)
// Young Sinatra , Bobby Tarantino , The Incredible True Story , Supermarket , Under Pressure