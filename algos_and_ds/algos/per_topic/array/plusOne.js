/* 
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

Constraints:
    1 <= digits.length <= 100
        - no need to check empty strs
    0 <= digits[i] <= 9
        - no need to check negative values
    digits does not contain any leading 0's.
        - no need to check leading 0's

=== Algo design ===
1 2 3 
- Preserve decimals 
- how to transform 1 into 12, preserving the decimals?
- I need to have
    decimal
    hundred
    thousands..

1, 2, 3 => 1 2 3 
    - remove the commas
    - convert it to number, add + 1
    - convert back to array of nums

1, 2, 3 
123 + 1 => 124 => 1, 2, 4


=== Big O ===
t: O(n)
    - n: digits.length
    - .split() => remove comma
    - toString => built in complexity? O(n)?
    - .split() => to add comma back

s: O(n)
    - toString
    - addOne
*/

var plusOne = function (digits) {
  // split only works in strings
  const digit = digits.join("");
  const plusOne = Number(digit) + 1;
  const resultArr = String(plusOne)
    .split("")
    .map((el) => Number(el));

  return resultArr;
};

plusOne([1, 2, 3]);
