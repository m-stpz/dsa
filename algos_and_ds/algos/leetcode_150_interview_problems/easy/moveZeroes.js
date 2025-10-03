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
    0   1   0   3   12 
    back O (track last found zero element)
        front 1 (tracks next non-zero element)

    swap them 
    1 0  0   3   12 
      back 1 becomes front
            front 3 (if zero continue, if non-zero save it)


    1 0  0   3   12 
      back becomes front
            front  (if zero continue, if non-zero save it)
        back must become front and swap the elements

        [arr[0], arr[1]] = [arr[1], arr[0]]; => swap js
    */
  let back = 0;
  let front = 0;

  while (front <= nums.length) {
    if (nums[front] !== 0) {
      [nums[back], nums[front]] = [nums[front], nums[back]]; // swap them
      back++;
    }

    front++;
  }
};

moveZeroes([0, 1, 0, 3, 12]);
