/* 
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences

Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation:
The longest harmonious subsequence is [3,2,2,2,3].

Example 2:
Input: nums = [1,2,3,4]
Output: 2
Explanation:
The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

Example 3:
Input: nums = [1,1,1,1]
Output: 0
Explanation:
No harmonic subsequence exists.
*/

/* 
Algo design
1 3 2 2 5 2 3 7
  s  
        e

- I can use built-in methods, so .sort could be used

1. sort it
1 2 2 2 3 3 5 7
.sort((a, b) => a - b)

0 1 2 3 4 5 6 7 => index
1 2 2 2 3 3 5 7 => .length (8)
p1
     p2

2-1 = 1 
2-1 = 1
2-1 = 1

take the difference 
p2(high) - p1(low)
3 - 1 === 2

p1 = 1 
p2 = 4
result = 3



2 - 1 + 1 = 0

1. sort it

    p1 is within bounds
while (p1 < sortedNums.length){
    difference = sortedNums[p2] - sortedNums[p1] // and this

    // this was the logic missing for situations such as [1,1,1,1]
    if (difference === 1){
        grab the max 
        Math.max(result, p2 - p1 + 1) // I missed this totally
    }

    if (difference <= 1){
        p2++ // increase window
    } else {
        p1++ // we broke the condition to keep increasing the window
        // so, we must walk
    }
}


Big O analysis
t:
   -  sort: O(n log n)
   - loop: O(n)
s:
    - O(1): no data structure being created inside the loop
*/

var findLHS = function (nums) {
  // t: O(n log n)
  // s: sorts the array in place
  nums.sort((a, b) => a - b);

  // s: simple variables
  let p1 = 0;
  let p2 = 1;
  let result = 0;

  //t: O(n)
  while (p1 < nums.length) {
    // 2-1 == 1
    // s: accessing elements on the array by index: O(1)
    // s: subtracting two numbers, also constant
    let difference = nums[p2] - nums[p1];

    // harmonious sequence
    if (difference === 1) {
      // keep increasing the counter
      result = Math.max(result, p2 - p1 + 1); // we add one, because we "include" the starting point
    }

    if (difference <= 1) {
      p2++;
    } else {
      p1++;
    }
  }

  return result;
};

findLHS([1, 3, 2, 2, 5, 2, 3, 7]);

/* 
# Post Mortem

Problem: Longest Harmonious Sequence
Problem statement (one-liner): Identify the largest subset that is harmonious (difference <= 1)
Link: https://leetcode.com/problems/longest-harmonious-subsequence/description/?envType=problem-list-v2&envId=sliding-window
Date: 16.10.2025

### Algorithm
1. Pattern used: Two pointers
    - sorting first
    - calculate difference
    - get the max value    
2. Key idea (short explanation): 
    - Sort the array first
    - Setup p1, p2, result
    - Loop through array
        - Get difference
        - If difference === 1:
            get max value between result, p2 - p1 + 1 (important to add one, to include the "initial point")
                p1 = 0
                p2 = 4
                4 - 0 + 1 = 5 => longest sequence
        - If difference <= 1:
            p2++
        - else: we broke the condition of harmonious
            p1++
3. Time to design the algorithm: +60min
    - I couldn't solve it. I needed to search
4. Time to code: +60min
6. What solutions did I consider/miss?
    - I missed:
        - calculating the difference: nums[p2] - nums[p1] => which was a bit obvious
        - result = math.max(result, p2 - p1 + 1) => the way to "increase the counter"
7. Was your solution optimal?
    - No. A map would be more effective
8. What triggers did I find/miss?  
9. Any mistakes I keep making?
    - I couldn't solve the problem. I needed to search. So:
        - even though I got close, I missed: 
         - the difference
         - using Math.max
         - adding + 1
         - adding the counter by p2 - p1 + 1
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
11. Takeaways
    - Think more clearly about the algo
    - Try to simplify
    - Solve the fundamental problem first
12. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 2
Coding: 2
Verification: 4
Communication: 3
*/
