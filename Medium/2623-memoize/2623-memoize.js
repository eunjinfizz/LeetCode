/**
 * @param {Function} fn
 */
function memoize(fn) {
    let memoObj = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in memoObj) return memoObj[key];
        return memoObj[key] = fn(...args);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */