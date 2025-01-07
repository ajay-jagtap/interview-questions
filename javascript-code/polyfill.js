// Map Polyfill

if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
        if (this == null) {
            throw new TypeError('Array.prototype.map called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        const result = [];
        const array = Object(this); // Convert 'this' to an object
        const len = array.length >>> 0; // Ensure length is a valid number

        for (let i = 0; i < len; i++) {
            if (i in array) {
                result[i] = callback.call(thisArg, array[i], i, array);
            }
        }

        return result;
    };
}


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

