# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# First Solution = recursive DFS, O(n)
# class Solution:
#     def maxDepth(self, root: Optional[TreeNode]) -> int:
#         if not root:
#             return 0
        
#         return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1;
    
# Second Solution = iterative BFS, O(n)
# deque = "double ended queue" - doubly linked list that gives O(1) pop and push for head and tail
# from collections import deque

# class Solution:
#     def maxDepth(self, root: Optional[TreeNode]) -> int:
#         if not root:
#             return 0
        
#         level = 0
#         queue = deque([root])
#         while queue:
#             for i in range(len(queue)):
#                 node = queue.popleft()
#                 if node.left:
#                     queue.append(node.left)
#                 if node.right:
#                     queue.append(node.right)
#             level += 1
            
#         return level
        
# Third Solution = iterative DFS, O(n) - preorder easiest with iterative
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        stack = [[root, 1]]
        level = 0
        
        while stack:
            node, depth = stack.pop()
            if node:
                level = max(level, depth)
                stack.append([node.right, depth + 1])
                stack.append([node.left, depth + 1])

        return level