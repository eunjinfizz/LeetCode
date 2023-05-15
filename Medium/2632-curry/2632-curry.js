/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    return function curried(...arg) {
        if(arg.length < fn.length){
            return (...arg2) => curried(...arg, ...arg2); 
        }
        return fn(...arg);
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
