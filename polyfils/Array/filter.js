// .filter() is very much similar to map() function except for the fact, it is used based on the context, 
// where we decide what kind of items do we want in the resulting array.

var albums = [
    {
        name: "Denium",
        rating: 5
    },
    {
        name: "Alice",
        rating: 4.5
    },
    {
        name: "Supermarket",
        rating: 4.9
    },
    {
        name: "Bob",
        rating: 5
    }
]
// using original Filter
var originalFiltered = albums.filter((album)=> {
    return album.rating > 4.9
});

console.log(originalFiltered);


// Filter Polyfil
Array.prototype.myFilter = function (callback, context) {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(callback.call(context, this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}

// using Polyfil of Filter
var polyfilFiltered = albums.myFilter((album)=> {
    return album.rating > 4.9
});

console.log(polyfilFiltered);
