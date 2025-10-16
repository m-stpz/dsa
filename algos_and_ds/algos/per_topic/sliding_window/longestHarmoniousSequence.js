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
    sort: O(n log n)


s:

*/

var findLHS = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b); // t: O(n log n)

  let p1 = 0;
  let p2 = 1;
  let result = 0;

  //t: O(n)
  while (p1 < sortedNums.length) {
    // 2-1 == 1
    let difference = sortedNums[p2] - sortedNums[p1];

    if (difference === 1) {
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

console.log(findLHS([1, 1, 1, 1]));
