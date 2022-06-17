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
 * @return {number}
 */

// Recursive DFS O(n), 
// var maxDepth = function(root) {
//     if (!root) return null;
    
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };

// iterative DFS
var maxDepth = function(root) {
    if (!root) return 0
    
    let stack = [[root, 1]];
    let level = 0;

    while (stack.length) {
        let node = stack.pop();
        
        if (node !== null) {
            level = Math.max(level, node[1]);
            if (node[0].left !== null) stack.push([node[0].left, node[1] + 1]);
            if (node[0].right !== null) stack.push([node[0].right, node[1] + 1]);
        }
    }
    
    return level
};