/* 
1. Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]


What if we only bring to the front non zero elements?

Algo design 
0 1 0 3 12
back => before it, there should be no zeroes
    keeps track of where non-zero element should go
 front => keeps track if non-zero elements are found
    

if front !== 0:
    swap elements
    back walks

1 3 12 0 0  
       b
        f
*/

function moveZeroes(nums) {
  let back = 0;
  let front = 0;

  while (front < nums.length) {
    if (nums[front] !== 0) {
      [nums[back], nums[front]] = [nums[front], nums[back]];
      back++;
    }

    front++;
  }
}

moveZeroes([0, 1, 0, 3, 12]);

/* 
2. Two Sum Sorted
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Design algo
2 7 11 15
i
2 7 11 15
       j => naive, nested, O(n^2)

2 7 11 15
p1
        p2

2 + 15 = 17
    if sum === target
        return
         3        9
    if sum < target
        increase p1
    if sum > target
        decrease p2
*/

function twoSumSorted(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    let sum = numbers[start] + numbers[end];

    if (sum === target) {
      return [start + 1, end + 1];
    }

    if (sum < target) {
      start++;
    } else {
      end--;
    }
  }

  return -1;
}

twoSumSorted([2, 7, 11, 15], 9);

/* 
3. Remove duplicates

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


Algo design 

- identify and remove duplicates
- order should be kept
- return num unique elements

original: 0 0 1 1 1 2 2 3 3 4

0 1 2 3 1 2 2 3 3 4
      p1 => unique elements is p1 + 1 (since arrays are zero-indexed)
                  p2

if !equal:
    p1++
    nums[p1] = nums[p2] => not swapping! Assigning value

if equal
    p2++

*/

function removeDuplicates(nums) {
  let back = 0;
  let front = 1; // first element is unique

  while (front < nums.length) {
    if (nums[front] !== nums[back]) {
      back++; // important to increase back first. Before it, only unique elements
      // what was previously in that index, becomes the new unique value "discovered" by front
      nums[back] = nums[front];
    }

    front++;
  }

  return back + 1;
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

/* 
4. Merge sorted arrays 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Algo design 

nums1 [1,2,3,0,0,0]
m = 3 
nums2 [2,5,6]
n = 3

[1,2,3,3,5,6] [2,5,6]
p1  
    p2
              p3

   p1 >=0 && p3 >=0
   while (condition){
      nums1[p1] < nums2[p3]
        nums1[p2] = nums2[p3]
        p3-- 
      
      else
        nums1[p2] = nums1[p1]
        p1--
      
      p2-- // we reduce p2 in both scenarios
    }
      
    // edge case that all values come from nums2
    while(p3>=0){
      nums1[p2] = nums2[p3]
      p2--
      p3--
    }


[0,0,0] [2,5,6]
    p2
              p3

*/

function mergeSort(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = nums1.length - 1;
  let p3 = n - 1;

  while (p1 >= 0 && p3 >= 0) {
    if (nums1[p1] < nums2[p3]) {
      nums1[p2] = nums2[p3];
      p3--;
    } else {
      nums1[p2] = nums1[p1];
      p1--;
    }

    p2--;
  }

  while (p3 >= 0) {
    nums1[p2] = nums2[p3];
    p2--;
    p3--;
  }

  return nums1;
}

mergeSort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
