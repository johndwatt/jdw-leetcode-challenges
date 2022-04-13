class Solution:
    def isPalindrome(self, x: int) -> bool:
        # check if x has data
        if x < 0: return False
        # make x a string
        x_str = str(x)
        # pointer for checking back half of string
        j = len(x_str) - 1
        # loop through and compare back half to front half of string
        # have to make division an int for this to work because python division returns float
        for i in range(int(len(x_str) / 2)):
            if x_str[i] != x_str[j]: return False
            j -= 1
        # return true if loop does not involidate palindrome
        return True