
var RecentCounter = function() {
    counter = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    while(counter.length && counter[0] < t - 3000){
        counter.shift();
    }
    counter.push(t);
    return counter.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */