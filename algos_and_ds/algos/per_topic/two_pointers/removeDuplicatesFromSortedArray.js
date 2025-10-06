/* 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 

The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
The remaining elements of nums are not important as well as the size of nums.
Return k.


Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/* 
Algo design

0 1 2
1 1 2
    i => encountered twice   
    if element is equal (repeated)
    if next element is not equal continue
    we send this to end 
    next iteration comes here (swapping)
        identify the place where this number needs to go to
we need to keep track of visited elements
if repeated element 
    swap next new number with position of first encountered + 1
    k++
    ======
    0 1 2 3 4 5 6 7 8 9 
    0 0 1 1 1 2 2 3 3 4
    back
    front
    if front === back: repeated
        keep only the back
        but send to the end

    0 1 2 2 3 3 4 1 1 0 => first send all repeated elements to the end | After, substitute repeated elements for _ (another loop which substitutes after k)
        left    
                right

    if (left[i] === left[i + 1]): repeated
        left[i+1] = goes to right
        right--
    
    I can only walk left when there aren't repeated elements
    left++ = must always walk 

    0 1 1 1 2 2 3 3 4 0 => slice? | splice?
    start
*/

/* 
two pointer approach 
    - start 
    - end 

    if we encounter a repeated element
     1. send it to the end
     2. reduce end 
     3. increase k

    on another loop, substitute the repeated elements at the end for _
t: O(n)
s: O(1)
*/

var removeDuplicates = function (nums) {
  // first element is always unique
  let back = 0;
  let front = 1;

  while (front < nums.length) {
    // if it's repeated
    if (nums[front] === nums[back]) {
      // splice takes O(n) inside a loop, therefore we'd have O(n^2)
      nums.splice(front, 1);
    } else {
      back = front; // move back to unique
      front++; // walk front
    }
  }

  return back + 1;
};

removeDuplicates([0, 0, 1, 1, 2, 2]); // [1,2,_]

/* 
# Post Mortem

Problem: Remove duplicates from sorted array 
Problem statement (one-liner): remove duplicates in place and return the number of unique elements
Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=problem-list-v2&envId=two-pointers
Date: 06.10.25

### Algorithm

1. Pattern used: Two pointers
2. Key idea (short explanation): Using two pointers to identify if front is equal to back. If it's, remove it with splice. Else, back becomes front and walk the front
3. Time to design the algorithm: 30-40min.
4. Time to code: 40min.
5. Big O analysis:
   t: O(n^2)/ Explanation: while loop + nested loop
    n = the length of the array 
   s: O(1) / Explanation: No new array created, only manipulating the back/front index
6. What solutions did I consider/miss?
    - Two pointers, either walking from the left and right, or back to front
    - Decided that back to front would be better since we would compare them "side by side"
7. Was your solution optimal?
    - Nope. Quadratic time due to a splice within a while loop
8. What triggers did I find/miss?
    - Swapping in place instead of using splice
9. Any mistakes I keep making?
    - Instead of using front < nums.length, I used front <= nums.length
        - front must strictly stay inside the array
        - indexes go from 0 to nums.length - 1
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
    - Avoiding using splice, instead changed it in place
    - Be mindful of built-in method complexities. I've got O(n^2) because used splice inside while loop
    - Overwrite in place instead of splice
11. Takeaways
    - Two pointers is quite effective
    - Pay attention whether two use converting, parallel or trigger-based pointer
    - Handle what matters, skip the rest
    - Every pointer must have a clearly defined responsibility
    - Stay within scope. You tried to add _ after the array, and you only needed k => unique elements
    - Define the invariant
        1. after each iteration, all elements before `back` are unique and sorted
12. Is there anything I should add to my cheat sheet?

### Self-rating

Problem solving: 3
Coding: 3
Verification: 3
Communication: 3

*/

var removeDuplicatesImproved = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  // first element is always unique
  let back = 0;
  let front = 1;

  while (front < nums.length) {
    /* 
    1. Positive case is the useful one
        - Only act when a NEW UNIQUE VALUE is found `nums[front] !== nums[back]
        - That's when we need to advance back and write the new value
        - Duplicate case requires no action, just move front
        - Handle what matters, skip the rest
    */
    if (nums[front] !== nums[back]) {
      back++;
      // [uniques | nonuniques]
      nums[back] = nums[front];
    }

    front++; // walk front
  }

  return back + 1;
};

removeDuplicatesImproved([0, 0, 1, 1, 2, 2]); // [1,2,_]
