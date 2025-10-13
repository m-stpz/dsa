/*  
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
Algo design
[1,2,3,1]
s      e
    i
       j => for now it seems I'd need a nested loop

what if I "add" the encountered elements on the sub array and check if it has a count more than 2?

is there any repeated element within this window?
could we combine sliding window with two pointers?
    two pointers only run within subset

s = 0
e = 3


k = 3
0  1 2
[1,2,3,1,2,3]
s    e

I need to check only within the subarray
1 2 3 
  2 3 1
    3 1 2 
      1 2 3

I need to walk the window 
    - Within the window, nested loop
        i === j

The best way to check whether this element exists is using a set

Big O analysis
t: O(n)
  n: number of elements (input length)
  time scales linearly with input length 

s: O(k)
  k: the size of the window
  memory scales only with the window size (k), not the entire array
*/

var containsNearbyDuplicate = function (nums, k) {
  // it stores only the elements inside the current sliding window
  // in the worst case, the set contains O(k+1) elements
  const window = new Set(); // start the window

  let start = 0;

  // set up our loop end
  // t: O(n): outer loop => iterate through the elements
  for (let end = 0; end < nums.length; end++) {
    // if we encountered the element on set, return true
    // s: O(1): hash lookup
    if (window.has(nums[end])) {
      return true;
    }

    // else, add the element to the set
    // s: O(1): hash insert
    window.add(nums[end]);

    // if the size of our window is bigger than k
    if (window.size > k) {
      // remove the element at the initial position
      window.delete(nums[start]);
      start++; // walk the window
    }
  }

  //   if we got here, no duplicate elements
  return false;
};

containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);

/* 
# Post Mortem

Problem: Contains duplicates 
Problem statement (one-liner): Check whether there's duplicate elements within window
Link: https://leetcode.com/problems/contains-duplicate-ii/submissions/?envType=problem-list-v2&envId=sliding-window
Date: 13.05.2025

### Algorithm

1. Pattern used: Sliding window + using a set to check repeated values
2. Key idea (short explanation):
  - window is a set
  - start = 0
  - for loop end = 0 until nums.length
  - if window.has(nums[end])
    return true
  - if not, add it to the window 
  - if window.length > k
    - remove first = window.delete(nums[end])
    - add next = start++
3. Time to design the algorithm: 20-25min
4. Time to code: 10min
5. Big O analysis:
   t: O(n)/ Explanation:
    - Scales linearly with the nums length
   s: O(k)/ Explanation:
    - Scales up to the window size (k)
6. What solutions did I consider/miss?
  - I considered:
    - using an object, but I didn't know how to put it together
  - I missed:
    - Using a set
    - Knowing how to use the set: .has, .add, .delete
7. Was your solution optimal? Yes, the lower bound is linear
8. What triggers did I find/miss?
9. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
   - I should know when to use set and map
10. What could I have done differently?
11. Takeaways
  - Remember the existence of `sets`
  - Know how to increase/decrease the window
12. Is there anything I should add to my cheat sheet?
  - Set and its methods

### Self-rating

1(terrible) - 5(amazing)

Problem solving:
Coding:
Verification:
Communication:


*/
