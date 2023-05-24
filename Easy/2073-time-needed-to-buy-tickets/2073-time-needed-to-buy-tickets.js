/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let answer = tickets[k];
    
    for(let i = 0; i < k; i++){
        answer += Math.min(tickets[i], tickets[k]);
    }
    
    for(let j = k + 1; j < tickets.length; j++){
        answer += Math.min(tickets[j], tickets[k] - 1);
    }
    
    return answer;
};