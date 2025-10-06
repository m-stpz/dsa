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
    1 2 2  3  0  0  0 | 2  5  6 
                    zeroRemoval
                             n

    
    // loop 1: just merge the arrays: removing 0s and bringin nums2 to nums1
    1 2 2  3  2  5  6 |  
              p1  
                        p2

    0 1 2  3  4  5  6
    1 2 2  3  2  5  6  |
          left => everything behind left is sorted
            right

    left: 1[0]
    right: 6[6]
    
    
    if (left > right){
        swap them 
        [nums1[left],nums1[right]] = [nums1[left],nums1[right]]
        right--
        left++
    }

    left++
    right--                  
 */
function merge(nums1, m, nums2, n) {
  let zeroRemoval = nums1.length - 1;
  let nums2Adder = n - 1; //n 2 (index)
  let left = 0;
  let right = nums1.length - 1;

  // loop 1: merge
  while (nums2Adder >= 0) {
    nums1[zeroRemoval] = nums2[nums2Adder];
    zeroRemoval--;
    nums2Adder--;
  }

  // loop2: sort
  while (left <= right) {
    if (nums1[left] > nums1[right]) {
      [nums1[left], nums1[right]] = [nums1[right], nums1[left]];
      right--;
      left++;
    }

    right--;
    left++;
  }
}

merge([1, 4, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// https://leetcode.com/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=two-pointers

/* 
# Post Mortem

Problem:
Problem statement (one-liner):
Link:
Date:

### Algorithm

1. Pattern used:
2. Key idea (short explanation):
3. Time to design the algorithm: 30min.
4. Time to code:
5. Big O analysis:
   t: / Explanation:
   s: / Explanation:
6. What solutions did I consider/miss?
7. Was your solution optimal?
8. What triggers did I find/miss?
9. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
11. Takeaways
12. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving:
Coding:
Verification:
Communication:

*/
