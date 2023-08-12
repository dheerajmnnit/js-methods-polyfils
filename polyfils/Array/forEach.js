// .forEach() function comes quite handy when we just need to iterate an array.

// This function is quite useful because we don't need to implement for loop from scratch, hence saving our time and a lot of crap on the developer screen.



var names = [
    'Denium',
    'Alice',
    'Bob',
    'Supermarket'
]

// using original forEach
names.forEach(function (word) {
    console.log(word);
})

// forEach Polyfil
Array.prototype.myForEach = function (callback) {
    // callback here is the callback function
    // which actual .forEach() function accepts
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this) // currentValue, index, array
    }
}

// using polyfil of forEach
names.myForEach(function (word) {
    console.log(word);
})