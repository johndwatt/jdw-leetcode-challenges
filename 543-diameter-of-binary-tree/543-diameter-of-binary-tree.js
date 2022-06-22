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
var diameterOfBinaryTree = function(root) {
    let result = 0;
    
    const dfs = function (root) {
        if (!root) return 0;
        let right = dfs(root.right);
        let left = dfs(root.left);
        result = Math.max(result, left + right + 1);
        return Math.max(left, right) + 1;
    }
    
    dfs(root);
    
    return result - 1;
};
