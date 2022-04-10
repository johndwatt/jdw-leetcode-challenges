class Solution:
    def findComplement(self, num: int) -> int:
        binary_str = "{0:b}".format(num)
        result = binary_str.translate(str.maketrans("10", "01"))
        return int(result, 2)