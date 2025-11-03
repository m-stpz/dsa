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
[1,2,3] => 123 + 1 = 124
     ^

    if value === 9
        carry += 1
        currvalue = 0
    else: 
        increase the rightmost element

1 2 3
    ^
- we could loop right to left (reverse loop)
- if last digit
    - replace value with it +1

1 2 4
---
4 3 2 2 
      ^
---
9 0
^

add one to the beginning
1 0 0 
^

  - we need to deal with 9
  - 9 becomes 0
  - carry = 1
    - we "carry one" from right to left
    - if value === 9, continue carrying it leftware
    - if value < 9, add carry to current digit
    
=== Big O ===
t: O(n)
    - single pass digits
    - n: digits.length

s: O(1)
    - constant memory 
    - no extra space besides "carry"
*/

var plusOne = function (digits) {
  // reverse loop
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits; // only do it once
    } else {
      digits[i] = 0;
    }
  }

  // in case we have all 9's
  digits.unshift(1);
  return digits;
};

plusOne([1, 2, 3]);

/* 
# Post Mortem

Problem: Plus one
Problem statement (one-liner): Given an array of single digits, return their result + 1
Link: https://leetcode.com/problems/plus-one/
Date: 03.11.25

### Algorithm

1. Pattern used: 
    - Reversed loop and adding one
2. Key idea (short explanation):
    - Travese the array from right to left
        - If digit is less than 9
            - add 1 
            - return 
        - If digit is 9
            - carry over (make the element 0)
    - if we haven't returned it, it means we've got "only 9's", so it means we need to add "1" to the beginning
        - digits.unshift(1)
3. Time to design the algorithm: 30min (I couldn't solve it by myself, needed to search)
4. Time to code: 10min
5. What solutions did I consider/miss?
    - Missed
        - Reverse loop
        - Doing it as we'd do 'by hand'
        - dealing with 9 edge cases and "normal" cases 
6. Was your solution optimal?
    - The current solution, it is, but I needed help
7. What triggers did I find/miss?
8. Any mistakes I keep making?
    - I should have thought about:
        - traversing it reversed
        - dealing with 9 edge case
            - carrying the value
   - Any bugs I should add to the Bug List?
9. What could I have done differently?
10. Takeaways
    - Remember the principles
11. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 3
Coding: 3
Verification: 4 
Communication: 4
*/
