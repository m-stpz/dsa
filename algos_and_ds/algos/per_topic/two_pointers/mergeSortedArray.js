/* 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

/*
    algo design  
    nums1               nums2
original: 1 2 3 0 0 0 |  2 5 6
   
    how do we we initialize to the biggest non-zero value?

      what do we do with the 2?
      1 2 3 0 0 0 | 2  5  6 
              zeroP
          m-1
                      n - 1
  
      if 

      if n - 1 < m - 1:
        zeroP = m - 1
        n--
        zeroP--
      
          3   2
      if p1 > p3:
        p2 = p1
        p1--
      if p1 === p3:
        p2 = p3
        p1--
        p3--
 */

// m(3) + n(3) - 1 => 5
function merge(nums1, m, nums2, n) {
  // 3 - 1 = 2 (index)
  let p1 = m - 1; // we start it at the first non-zero element (m holds the quantity of zero values)
  let zeroPointer = nums1.length - 1;
  let pointerNums2 = n - 1;

  // nor p1, nor zeroPointer must go out of bounds
  while (p1 >= 0 && pointerNums2 >= 0) {
    // 3 < 6
    if (nums1[p1] <= nums2[pointerNums2]) {
      nums1[zeroPointer] = nums2[pointerNums2];
      pointerNums2--;
    } else {
      nums1[zeroPointer] = nums1[p1];
      p1--;
    }
    // regardless of which element we write, we want to decrement it
    zeroPointer--;
  }

  // one more edge case
  // fill nums1 with leftover elements
  while (pointerNums2 >= 0) {
    nums1[zeroPointer] = nums2[pointerNums2];
    zeroPointer--;
    pointerNums2--;
  }

  return nums1;
}

// m(3) - 1 = 2
// 0  1 2
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// merge([2, 0], 1, [1], 1);

/* 
# Post Mortem

Problem: Merge sorted array
Problem statement (one-liner): Merge two sorted arrays
Link: https://leetcode.com/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=two-pointers
Date: 12.10.2025

### Algorithm

1. Pattern used: Three pointer + start from end and compare the values
2. Key idea (short explanation): 
  - Start a pointer a nums2 end, nums1 end and nums1 last "real value"
  - Loop backwards, comparing the value and assigning them according to the biggest
  - Add a final loop to merge any left nums2 values
3. Time to design the algorithm: 120min.
4. Time to code: 60min.
5. Big O analysis:
   t: O(m+n) 
    m: number of valid numbers in nums1
    n: number of elements in nums2
    It's not big O(n) because it depends both on nums1 length and nums2 length 
    - We need to compare these elements 
   s: O(1) / Explanation: No extra memory is created
    - All merging is done in-place, no extra space created
    - No additional data structures are used
6. What solutions did I consider/miss?
  - Two pointers
  - Going backwards 
  - I missed the remaining elements of nums2 though
7. Was your solution optimal?
  - Yes, O(m+n) is the optimal solution for merge sorte
8. What triggers did I find/miss?
  - I thought correctly about starting from the end and the need to have 3 pointers
9. Any mistakes I keep making?
    - In some cases, I forgot to use nums1[p1], instead, I used p1 itself
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
  - I think I did well
  - The only thing is that once I had a possible solution, I didn't do a big O analysis
11. Takeaways
  - Always analyze the problem deeply
  - Once you created a possible solution, make the big O analysis
  - Also, you everything the problem gives us
12. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 4
Coding: 4
Verification: 5 
Communication: 5

*/
