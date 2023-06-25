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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const result = new TreeNode();
    let auxPointer = result;
    const inorderTraversal = (node) => {
        if (!node) return;
        inorderTraversal(node.left);
        auxPointer.right = new TreeNode(node.val);
        auxPointer = auxPointer.right;
        inorderTraversal(node.right);
    };
    inorderTraversal(root);
    return result.right;
};