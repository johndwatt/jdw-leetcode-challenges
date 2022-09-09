# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        result = 0
        
        def dfs (root):
            nonlocal result
            if not root: return 0
            right, left = dfs(root.right), dfs(root.left)
            result = max(result, left + right + 1)
            return max(left, right) + 1
        
        dfs(root)
        
        return result - 1
