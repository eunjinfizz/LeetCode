
var TimeLimitedCache = function() {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let cache = this.cache;
    const objKey = key.toString();
    const cached = (objKey in cache);
    
    if(cached){
        clearTimeout(cache[objKey].timeoutId);
    }
    const timeoutId = setTimeout(() => delete cache[objKey], duration);
    cache[objKey] = {value, timeoutId};
    
    return cached;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const cacheValue = this.cache[key.toString()];
    return cacheValue ? cacheValue.value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.cache).length;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */