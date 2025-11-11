/* 
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]

Output: 2

Explanation:

n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]

Output: 8

Explanation:

n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.

- Core algo
1. Sort them
2. Identify where the "jump" happens (a progression which is greater than 1)
3. return the index + 1 of the jump

Pseudocode
[9,6,4,2,3,5,7,0,1]
   ^
- maxVal = 9
- lowerBound = 0




let missingNumber = null

zero must be included 
- sortArr[0] !== 0
    missingNumber = 0

1 2 3 4 5 6 7 8 9
0 1 2 3 4 5 6 7 9
              ^

nums.length = 9

// not sure?
if(sortArr[sortedArr.length - 1] !== sortedArr.length){
    missingNumber = sortedArr.length
}

0 1 2 3 4 5 6 7 8 

    let current = arr[i] 6
    let next = arr[i + 1] 7

    if (next - current === 2){
        missingNumber = i + 1
    }

    return missing number

- what if the missing number is 0?

[0]

O(n log n)
nums.sort(a,b => a - b)

=== Big O ===
t: O(n log n)
    n = nums.length 
s: O(1)
*/
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let missingNum = 0;

  if (nums[0] !== 0) {
    return missingNum;
  }

  if (nums[nums.length - 1] !== nums.length) {
    missingNum = nums.length;
  }

  for (let i = 0; i < nums.length; i++) {
    let difference = nums[i + 1] - nums[i];

    if (difference > 1) {
      missingNum = i + 1;
    }
  }

  return missingNum;
};

/* 
nums = missing number 
0 1 3
2 

0 1 2 



0 ... n + 1 


*/
var missingNumber2 = function (nums) {
  let map = {};
  let n = nums.length + 1;

  // create map
  for (let i = 0; i < n; i++) {
    map[i] = false;
  }

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }

  for (let [key, value] of Object.entries(map)) {
    if (value === false) {
      return Number(key);
    }
  }
};

missingNumber2([0, 3, 1]);
