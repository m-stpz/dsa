/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Example 1:
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

Example 2:
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

Example 3:
Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000

=== Algo Design ===

0 1 2 3 4 5
1 7 3 6 5 6
      i
j

loop through nums
    get left range
    get right range

    if left range === right range
        return i

return -1

leftRange = 0 - i 
calculateRange(leftRange)

rightRange = i - arr.length
calculateRange(rightRange) = sum of a given range

7 + 3 + 6 + 5 + 6

- how to divide left and right here?
    - use the current index i
        0 - i => left
        i - arr.length = right

calculate ranges:
    left range
    right range 

    leftSum = 6 + 5 + 6 = 11
    rightSum = 1 + 7 + 3 = 11
        if leftSum === rightSum 
            return [i]


- find pivot index
    - pivot index is the index of the element where all the elements to its left === elements to its right
    - if nothing is found, return -1


*/

var pivotIndex = function (nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    /* 
        leftArr
            startIndex = 0
            endIndex = i

        rightArr
            startIndex = i 
            endIndex = arr.length - 1

        left
            i
        0 - 0 = 0
        0 - 1 = 1 
        0 - 2 = 2

        right
        i   n 
        0 - 4 = 4
        1 - 4 = 3
        2 - 4 = 2
    */
    const leftSum = calculateSum(0, i, i, nums);
    const rightSum = calculateSum(i, n - 1, i, nums);

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
};

function calculateSum(startIndex, endIndex, currIndex, nums) {
  let sum = 0;

  for (let i = startIndex; i <= endIndex; i++) {
    if (i !== currIndex) {
      sum += nums[i];
    }
  }

  return sum;
}

pivotIndex([1, 7, 3, 6, 5, 6]);
