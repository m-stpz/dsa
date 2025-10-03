/* 
https://leetcode.com/problems/move-zeroes/description/

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

var moveZeroes = function (nums) {
  /* 
    0   1   0   3   12 => objective MOVE ZEROES to the end!
    back
      front if found a non-zero element swap them

    1 0 0 3 12
    1 3 0 0 12
    1 3 12 0 0 

    1,3,12,0,0 => goal
    */
  let back = 0; // we should walk the back only when we find a non-zero element and we need to swap
  let front = 0; // we should always walk the front

  while (front <= nums.length) {
    if (nums[front] !== 0) {
      [nums[back], nums[front]] = [nums[front], nums[back]];
      back++;
    }

    front++; // always walk
  }
};

moveZeroes([0, 1, 0, 3, 12]);

/* 

*/
