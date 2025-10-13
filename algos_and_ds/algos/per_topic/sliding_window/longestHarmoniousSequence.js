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

1 2 2 2 3 3 5 7
^
  ^

1-2 = 4
2-3 = 5 (I should know when to drop the prev count to return this one)
    - should I use two arrays?
        arr1 = [1,2,2,2].length
        arr2 = [2,2,2,3,3].length

        but then, I would need to do this for all possible numbers?
            3 (start) - 1 === 2 (end) (good, keep going)
            - we could increase the window by default
            - we only "break" the window when
                1 (start) + 1 = 2 (end) !== 3 
                nums[start] + 1 !== nums[end]

                nums[start] - 1 !== nums[end]

                start++
                end++

            - 3 + 1 !== 5 (instead of breaking the window, what if we just skip?)
                => This is why I thought about sorting them first
                - if we sort, we remove this need
                - but when will we know that we should skip vs. break?
                then, we'd break the window, however, we shouldn't

- maxVal
- minVal
    their difference must be === 1
- return longest subsequence among ALL its possible subsequences
    - check all possible subsequences
    - they don't need to be contiguous (in sequence)
        - we need to know when to when to drop a subsequence in favor of another
- return window that has biggest length
- the fact that it's not in order, makes it more challenging
    - what if we put them in order/sort?

if difference between start and end > 1 (for more or less)
if nums[start] + 1 < nums[end] || nums[start] - 1 
    start++
    end++




Big O analysis
*/

var findLHS = function (nums) {
  // const
};

findLHS([1, 3, 2, 2, 5, 2, 3, 7]);
