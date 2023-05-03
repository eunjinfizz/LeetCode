/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    
    nums2.forEach(v => set1.delete(v));
    nums1.forEach(v => set2.delete(v));
    
    return [[...set1], [...set2]];
};