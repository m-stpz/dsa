/* 
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

majority element = nums.length / 2 => 3 / 2 = 1.5 => we want the ceiling 2

we just need to find the count of element === majority element
- but how do we deal with the fact that the elements are mixed?
- if we use an object, we don't need to sort it!

{
    2: 4
    1: 3
}
    if (nums[i] === undefined){
        map[nums[i]] = 1 // initially
    } else {
        map[nums[i]] += 1 // add to object    
    }
    [2,2,1,1,1,2,2]
             ^

     1 = 3
    2 = 4 (majority element)

    we loop through the object and check which entry has this value?

// loop 1: create object
{
    1: 3
    2: 4
}

// loop 2: check which is the majority element
    - we need to check which value would match the majority element
    - return the key that does so
*/

var majorityElement = function (nums) {
  let map = {};
  const majorityElement = Math.ceil(nums.length / 2);

  // build the frequence map
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }

  for (const [key, value] of Object.entries(map)) {
    if (value === majorityElement) {
      return key;
    }
  }

  return -1;
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);
