class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Create a dictionary of lists for result return
        result = defaultdict(list)
        
        for string in strs:
            # Creates list with one section for each letter
            count = [0] * 26
            # Counts chars in string so we know which key to add string to
            for char in string:
                count[ord(char) - ord("a")] += 1
            # Adds a tuple of the char count for key in result dict and adds string to value list in result dict
            result[tuple(count)].append(string)
            
        # Only return a list of dict values, not entire dict to match output
        return result.values();