/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = (s, k) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let answer = 0;

    for(let i = 0; i < k; i++){
        if(vowels.includes(s[i])) answer++;
    }
    
    let count = answer;
    
    for(let i = 1; i <= s.length - k; i++){
        if(vowels.includes(s[i-1])) count--;
        if(vowels.includes(s[i-1+k])) count++;
        answer = Math.max(count, answer);
        if(answer === k) break;
    }
    
    return answer;
};