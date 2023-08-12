// Object.forEach()
// This isn’t a “real” polyfill, because it’s not based on a spec for a real feature.
// The lack of an Object.forEach() method felt like a big miss to me, 
// so I wrote a “polyfill” that works just like Array.forEach() and NodeList.forEach().


if (!Object.prototype.forEach) {
    // Check if the forEach method is not already defined on the Object prototype.
    Object.defineProperty(Object.prototype, 'forEach', {
      value: function(callback, thisArg) {
        // Check if 'this' is null or undefined, as these values can't be converted to objects.
        if (this === null || this === undefined) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
  
        // Check if the provided callback is a function.
        if (typeof callback !== 'function') {
          throw new TypeError(callback + ' is not a function');
        }
  
        // Set the context ('thisArg') for the callback function.
        thisArg = thisArg || window;
  
        // Ensure the proper type of object to iterate over.
        // Convert the context ('this') to an object to handle primitive values.
        var obj = Object(this);
  
        // Obtain an array of enumerable property names from the object.
        var keys = Object.keys(obj);
  
        // Iterate over the keys array to perform the callback on each property.
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          // Check if the property is directly owned by the object (not inherited).
          if (obj.hasOwnProperty(key)) {
            // Call the callback function with the specified context, value, key, and object.
            callback.call(thisArg, obj[key], key, obj);
          }
        }
      }
    });
  }
  