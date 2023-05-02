/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let answer = 1;
    for(num of nums){
        if(!num) return 0;
        if(num < 0) answer *= -1;
    }
    return answer;
    
    // let negCount = 0;
    // for(num of nums){
    //     if(!num) return 0;
    //     if(num < 0) negCount++;
    // }
    // return negCount % 2 === 0 ? 1 : -1
};