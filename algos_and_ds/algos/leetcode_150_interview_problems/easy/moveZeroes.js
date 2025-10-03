/* 
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

  while (front < nums.length) {
    if (nums[front] !== 0) {
      [nums[back], nums[front]] = [nums[front], nums[back]];
      back++;
    }

    front++; // always walk
  }
};

moveZeroes([0, 1, 0, 3, 12]);

/* 
# Post Mortem

Problem: Move Zeroes
Problem statement (one-liner): Move zeroes to the end of the array, in place, without creating a new one
Link: https://leetcode.com/problems/move-zeroes/description/
Date: 03.10.2025

### Algorithm

1. Pattern used: Two pointers
2. Key idea (short explanation): Track the back and the front. Whenever the front found a non-zero element, swap with 
3. Time to design the algorithm: around 10min.
4. Time to code: around 20-30min.
5. Big O analysis:
    n being the array of numbers
   t: O(n) / Explanation: We loop through the nums, however, no nested loops
   s: O(1) / Explanation: no variable created inside the loop, only integers at the beginning
6. What solutions did I consider/miss? Two pointers 
7. What solution optimal? Yes. Move zeroes has a hard lower bound of O(n), which was my algo
8. What triggers did I find/miss? Two pointers
9. Any mistakes I keep making?
    Not necessarily, but it was good to put two pointers in practice
   - Any bugs I should add to the Bug List?
10. What could I have done differently? 
    - broken down the problem even more and have solved only that conceptually
    - thought about the problem a bit more before coding
11. Takeaways
    - Take your time to think about the problem
12. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 3
Coding: 3
Verification: na
Communication: 5
*/
