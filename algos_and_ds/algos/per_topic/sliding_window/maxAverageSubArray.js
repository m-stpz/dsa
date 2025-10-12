/* 
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.


Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
*/

/* 
Algo design:

nums = [1,12,-5,-6,50,3], k = 4
        s        e
        window sum = start + end
        maxSum 

1. compute first k 
2. init maxSum to initial k sum
3. slide the window
    - add element entering window (nums[i])
    - remove element leaving window (nums[i - k])
        i = 4
        k = 4
        4-4 = 0 = index to be removed

        i = 5
        k = 4
        5-4 = 1 = index to be removed
    - update maxSum

pointer of fixed length = 4


Big O analysis:
t:
- first loop: O(k) 
  k = being the window size

- second loop: O(n - k)
  n = nums.length
  k = the window size

O(n-k) => O(n)

s: 
O(1)
- no additional ds created proportional to k
*/
var findMaxAverage = function (nums, k) {
  let sum = 0;

  // init first window (i = 0 until i < k)
  for (let i = 0; i < k; i++) {
    sum += nums[i]; // adding to the initial sum
  }

  /* 
    - pick up from where we stopped (i = k until i < k)
        - add next element ()
        - remove prev element
        - return max sum
    */
  let maxSum = sum;

  // i = 4 (where we add)
  // k = 4
  // i - k = 0 (where we remove)
  for (let i = k; i < nums.length; i++) {
    sum += nums[i]; // add new element
    sum -= nums[i - k]; // remove element
    maxSum = Math.max(sum, maxSum);
  }

  // return maxSum / k (average)
  return maxSum / k;
};

findMaxAverage([1, 12, -5, -6, 50, 3], 4);

/* 
# Post Mortem

Problem: Max Average sub array
Problem statement (one-liner): Find the max average within a specific array subset
Link: https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=problem-list-v2&envId=sliding-window
Date: 12.10.2025

### Algorithm

1. Pattern used: Sliding window (first time!)
2. Key idea (short explanation): 
  - Initialize window
  - Set init sum to sum of init window
  - Set maxSum to init sum
  - "Walk/Slide window"
    - add next element arr[i]
    - remove prev element arr[i-k]
    - check maxSum(sum, maxSum)
    - return maxSum / k
3. Time to design the algorithm: 20-30min.
4. Time to code: 20min.
5. Big O analysis:
   t: O(n) / Explanation: 
    Sequential loops
    First loop O(k), second O(n-k). Drop constants, O(n)
   s: O(1) / Explanation:
    No extra memory needed
6. What solutions did I consider/miss?
  Sliding window
7. Was your solution optimal?
  Yes, I need to scan all the array to find the maxSum, however, I'm doing this only once
8. What triggers did I find/miss?
9. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
11. Takeaways
  - Structure of sliding window pattern
  - Adding/removing elements window
12. Is there anything I should add to my cheat sheet?
  - Added init window + sliding it
  - Adding/removing elements


### Self-rating

1(terrible) - 5(amazing)

Problem solving: 4
Coding: 4
Verification: 4 
Communication: 4
*/
