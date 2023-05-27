/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
    
var findTheWinner = function(n, k) {
    let queue = Array.from({length: n}, (_,i) => i+1);
    
    while(queue.length > 1){
        let cnt = k - 1;
        while(cnt){
            queue.push(queue.shift());
            cnt--;
        }
        queue.shift();
    }
   
    return queue.shift();
};