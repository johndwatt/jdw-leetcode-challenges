class Solution:
    def romanToInt(self, s: str) -> int:
        roman_dict = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
        # result is for the returned sum of the roman numerals
        result = 0
        # prior will hold value of previous item
        prior = None
        for i in range(len(s)):
            # if prior exists and prior is less than the current item, subtract 2 multiplied by prior
            # this is so we remove the previous addition and the current roman number change
            if prior and prior < roman_dict[s[i]]:
                result += roman_dict[s[i]] - 2 * prior
            else:
                result += roman_dict[s[i]]
                prior = roman_dict[s[i]]
        return result