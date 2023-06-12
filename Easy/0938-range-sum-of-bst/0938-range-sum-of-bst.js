/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    
    const sumVal = (node) => {
    if (node.val >= low && node.val <= high) {
        sum += node.val;
    }
    if (node.left) sumVal(node.left);
    if (node.right) sumVal(node.right);
    return sum;
}
    
    return sumVal(root);
};