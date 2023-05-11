/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let returnValue = x;
        
        while(functions.length){
            const func = functions.pop();
            returnValue = func(returnValue);
        }
        
        return returnValue;
        
        // return functions.reduceRight((acc,func) => func(acc), returnValue)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */