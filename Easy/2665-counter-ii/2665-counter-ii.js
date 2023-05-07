/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = (init) => {
    let currentCount = init;
    
    return {
        increment: () => currentCount+=1,
        reset: () => currentCount = init,
        decrement: () => currentCount-=1,
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */