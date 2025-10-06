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
