/* 
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2


[1,1,0,1,1,1]
           ^

- if 1 encountered, increase count
    - however, how will we keep the biggest count?
- if 0 encountered, reset counter

count

loop through array
    curr_count
    if curr == 0:
        curr_count = 0
    else:
        curr_count++
        count = math.max(count, curr_count)

return counter 
*/

var findMaxConsecutiveOnes = function (nums) {
  let count = 0; // final
  let currentCount = 0; // temp

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      currentCount = 0; // reset the count
    } else {
      currentCount++;
      count = Math.max(count, currentCount);
    }
  }

  return count;
};
