/* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

var threeSum = function (nums) {
  const visited = new Set([]);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length + 1; k++) {
        const condition =
          i != j && i != k && j != k && nums[i] + nums[j] + nums[k] == 0;

        if (condition) {
          const sorted = JSON.stringify(
            [nums[i], nums[j], nums[k]].sort((a, b) => a - b),
          );

          visited.add(sorted);
        }
      }
    }
  }

  let result = [];

  for (const item of Array.from(visited.values())) {
    result.push(JSON.parse(item));
  }

  return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);
// threeSum([-1, 0, 1]);

const opposite = (num) => -num;

function threeSumOptimized(nums) {
  const visited = new Set([]);
  const sorted = nums.sort((a, b) => a - b);

  const opposite = (num) => -num;

  for (let i = 0; i < sorted.length; i++) {
    let start = i + 1;
    let end = sorted.length - 1;
    let current = sorted[i];
    let target = opposite(current); // get the opposite element

    while (start < end) {
      const pointersSum = sorted[start] + sorted[end]; // not sure if it's "sum"

      if (target < pointersSum) {
        end--;
      } else if (target > pointersSum) {
        start++;
      } else {
        visited.add(JSON.stringify([current, sorted[start], sorted[end]]));
        start++;
        end--;
      }
    }
  }

  let result = [];

  for (const item of Array.from(visited.values())) {
    result.push(JSON.parse(item));
  }

  return result;
}

threeSumOptimized([-1, 0, 1, 2, -1, -4]);
