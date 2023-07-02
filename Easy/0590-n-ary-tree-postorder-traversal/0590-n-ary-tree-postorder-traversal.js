/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const traverse = (node) => {
        if (!node) return;
        for(child of node.children){
            traverse(child);
        }
        answer.push(node.val);
    }
    
    const answer = [];
    traverse(root);
    return answer;
};