/* 
Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.


Example 1:

Input: nums = [-3,2,-3,4,2]
Output: 5
Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
step by step sum
startValue = 4 | startValue = 5 | nums
  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
  (4 +2 ) = 6  | (5 +2 ) = 7    |   2

Example 2:

Input: nums = [1,2]
Output: 1
Explanation: Minimum start value should be positive. 
Example 3:

Input: nums = [1,-2,-3]
Output: 5

=== Algo Design ===

miniumValue = max val nums?
- calculate the step by step sum val
- return minim value, so that step by step is never less than one

nums = [-3,2,-3,4,2]
prefixSum = [0, 1, 3]

    if i == 0:
        res = minValueArr[i] arr[i] 
    res = minValue - arr[i]
            4   + -3 = 1
            1 + 2 = 3
            3 + -3 = 0 => if zero, start again

    if res === 0
        start again 
        increase minValue++
        clean up prefix sum

=== Big O === 
t: O(n)
    - single pass
    - what about repeating the process if minValue isn't too big or small?

s: O(n)
*/

var minStartValue = function (nums) {
  let len = nums.length;
  let prefix = [len];
  let minValue = 1;

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      prefix[i] = minValue + nums[i];
    } else {
      prefix[i] = prefix[i - 1] + nums[i];
    }

    if (prefix[i] < 1) {
      let toBeIncreased = 1 - prefix[i];
      prefix[i] += toBeIncreased;
      minStartValue += toBeIncreased;
    }
  }

  return minValue;
};
// minStartValue([-3, 2, -3, 4, 2]);

minStartValue([-12]);
