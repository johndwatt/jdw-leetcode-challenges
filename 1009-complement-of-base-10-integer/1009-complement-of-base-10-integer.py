class Solution:
    def bitwiseComplement(self, n: int) -> int:
        # Convert n to binary str
        binary_str = "{0:b}".format(n)
        # replace 0 -> 1 and 1 -> 0
        result = binary_str.translate(str.maketrans("10", "01"))
        # return result as integer     
        return int(result, 2)