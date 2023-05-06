/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = (s, k) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let answer = 0;

    for(let i = 0; i < k; i++){
        if(vowels.has(s[i])) answer++;
    }
    
    if(answer === k) return answer;
    let count = answer;
    
    for(let i = 1; i <= s.length - k; i++){
        if(vowels.has(s[i-1])) count--;
        if(vowels.has(s[i-1+k])) count++;
        if(count > answer) answer = count;
        if(answer === k) break;
    }
    
    return answer;
};