/* 
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

Example 1:

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 

Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105
0 <= left <= right < nums.length
At most 104 calls will be made to sumRange.

=== Algo design ===
        0   1  2  3  4   5
arr = [-2, 0, 3, -5, 2, -1]
sumRange(0,2) = -2 + 0 + 3 = 1 
sumRange(2, 4) = 3 - 5 + 2 - 1 = -1

0   1   2   3  4   5
[-2, 0, 3, -5, 2, -1]
left    
        right
        i 
    
for loop
    i = left
    until i <= right
    i++

    sum += nums[i]

=== Big O analysis ===
t: 
    numArray
        t: O(n)
            n = nums.length
            single pass to build the prefix arr
        s: O(n)
            n = nums.length which we append to the prefix
    
    sumRange:
        t: O(1)
            in place arithmetic operation
        s: O(1)
           no extra memory allocation beyond local variables
*/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.prefix = [0];

  for (let i = 0; i < nums.length; i++) {
    /* 
        0 + 1
        1 + 2
        3 + 3 
        6 + 4
    */
    this.prefix.push(this.prefix[i] + nums[i]);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefix[right + 1] - this.prefix[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(numArray.sumRange(0, 2));

/* 
# Post Mortem

Problem: Range sum query 
Problem statement (one-liner): Given an array, be able to return the sum of a given range
Link: https://leetcode.com/problems/range-sum-query-immutable/submissions/1812211732/?envType=problem-list-v2&envId=prefix-sum
Date: 26.10.25

### Algorithm

1. Pattern used: Prefix sum
2. Key idea (short explanation):
    - Create a prefix sum arr
    - In each iteration, add to the prefix sum, the running sum 
    - on the range, 
        return prefix[right + 1] - prefix[left]
3. Time to design the algorithm: 30min.
4. Time to code: 20min
5. Big O analysis:
   done above
6. What solutions did I consider/miss?
    - First algo solved using prefix sum
7. Was your solution optimal?
    - The first, in which I used a loop to add the sum to the array, took s: O(n)
    - The second, by using prefix sum, it became optimal
8. What triggers did I find/miss?
9. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
11. Takeaways
    - Prefix sum
        prefix = [0]
        for loop:
            prefix.push(prefix[i] + arr[i])
        
    - range sum
        return prefix[right+1] - prefix[left]
12. Is there anything I should add to my cheat sheet?
    - Prefix sum hacks

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 4
Coding: 4
Verification: 4
Communication: 4
*/
