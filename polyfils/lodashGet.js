// The lodash.get() function is used to safely access nested properties of an object without causing errors if any intermediate property is undefined.

// Here's a basic implementation:

function customGet(obj, path, defaultValue) {
    const keys = path.split('.');
    let result = obj;

    for (const key of keys) {
        if (result === undefined || result === null) {
            return defaultValue;
        }
        result = result[key];
    }

    return result !== undefined ? result : defaultValue;
}

// Example usage
const data = {
    user: {
        name: 'John',
        address: {
            city: 'New York',
        },
    },
};

console.log(customGet(data, 'user.name'));           // Output: 'John'
console.log(customGet(data, 'user.address.city'));   // Output: 'New York'
console.log(customGet(data, 'user.address.zip'));    // Output: undefined
console.log(customGet(data, 'user.address.zip', 0)); // Output: 0 (default value)
