// This polyfill adds compatibility for older environments that don't support Object.assign() by providing a custom implementation.


if (typeof Object.assign != 'function') {
    // Check if Object.assign is not already defined as a function.
    Object.assign = function(target, varArgs) { // .length of function is 2
        'use strict';
        
        // Check if the target is null or undefined.
        if (target == null) { // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
        }

        // Convert the target to an object to ensure correct behavior.
        var to = Object(target);

        // Loop through arguments starting from index 1 (since index 0 is the target).
        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            // Skip over if the source is undefined or null.
            if (nextSource != null) {
                // Loop through enumerable properties of the source object.
                for (var nextKey in nextSource) {
                    // Check if the property is directly owned by the source (not inherited).
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        // Copy the property value to the target.
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        // Return the modified target object.
        return to;
    };
}
