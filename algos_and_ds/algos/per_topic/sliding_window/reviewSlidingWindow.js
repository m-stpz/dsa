/* 
1. Max average sub array
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:
Input: nums = [5], k = 1
Output: 5.00000

=== Algo design ===
find the window with the biggest average

k = 4 (window size)
0 1   2  3 4  5
1 12 -5 -6 50 3
  s
           e => init sum

k = 4
i = 4

4-4=0

sum = 1 + 12 -5 -6
sum = 12 -5 -6 50
sum = -5 -6 50 3

let init = sum
loop through first window
init maxSum = sum

loop through remaining elements
    add next element
    remove prev element
    maxSum = math.max(maxSum, sum)
*/

function maxAverageSubArr(nums, k) {
  let sum = 0;

  // expand window
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i]; // next element
    sum -= nums[i - k]; // the element we've to remove
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
}

/*  
2. Contains duplicates

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and distance(i - j) <= k. 

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

/* 
- does 
*/
