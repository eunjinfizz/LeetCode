/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];
    
    if(s.length === 1) return s;
    
    for(char of s){
        if(stack.length && Math.abs(stack[stack.length-1].charCodeAt(0) - char.charCodeAt(0)) === 32){
            stack.pop();
            continue;
        }
        stack.push(char);
    }
    
    return stack.join('');
};