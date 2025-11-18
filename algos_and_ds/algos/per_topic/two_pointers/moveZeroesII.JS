/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

== Big O == 
t: O(n)
    n = nums.length
    single 
s: O(1)
    no extra memory 
    changes in-place
*/

var moveZeroes = function (nums) {
  let back = 0;
  let front = 0;

  while (front < nums.length) {
    if (nums[front] !== 0) {
      // swap
      [nums[back], nums[front]] = [nums[front], nums[back]];
      back++;
    }

    front++;
  }

  return nums;
};

var moveZeroes = function (nums) {
  let back = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // swap
      [nums[back], nums[i]] = [nums[i], nums[back]];
      back++;
    }
  }

  return nums;
};
