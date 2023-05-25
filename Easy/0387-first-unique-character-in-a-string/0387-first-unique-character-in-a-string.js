/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    
    for(let char of s){
        map.has(char) ? map.set(char, false) : map.set(char, true);
    }
    
    for(let [key, unique] of map){
        if(unique) return s.indexOf(key);
    }
    
    return -1;
};