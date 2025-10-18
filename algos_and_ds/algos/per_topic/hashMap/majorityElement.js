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
  // t: O(n)
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      // s: O(1) add element to map
      map[nums[i]] = 1;
    } else {
      // s: O(1) increase the value of a key
      map[nums[i]] += 1;
    }
  }

  // O(n)
  for (const [key, value] of Object.entries(map)) {
    if (value >= majorityElement) {
      return Number(key);
    }
  }

  return -1;
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);

/* 
# Post Mortem

Problem: Majority element
Problem statement (one-liner): Find the element that appears more than ⌊n / 2⌋ times
Link: https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
Date: 18.10.2025

### Algorithm

1. Pattern used: Hash map to save the nums[i] as keys and their "count" as values
  - We return the key which has the value >= majority element
2. Key idea (short explanation): Save the key and values in a map and return the key of the element which has repeated the most
3. Time to design the algorithm: 20min
4. Time to code: 10 min 
5. Big O analysis:
   t:O(n) / Explanation:
    - n === input 'n' length 
    - O(n + n) => O(n)
   s: / Explanation:
    - O(n) because we initialize an map
    - The map initializes in the worst case 'n' keys
6. What solutions did I consider/miss?
  - I considered using a hashmap to store key/value pairs
  - I was able quite well to implement the map
7. Was your solution optimal?
  - Not necessarily. I needed to use two loops and a map
8. What triggers did I find/miss?
9. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
11. Takeaways
  - Using maps is very useful
12. Is there anything I should add to my cheat sheet?
  - Hash maps and their operations

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 4
Coding: 4
Verification: 4
Communication: 4
*/
