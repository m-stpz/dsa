# Two pointers

- Pattern for solving problems on arrays, strings, or linked lists efficiently
- Instead of using nested loopsl you strategically move two indices (pointers) to reduce time complexity, often from O(n^2) to O(n)

1. Two indices moving over a sequence

   - Typically left and right pointers (sometimes fast and slow)
   - They start at different positions (beginning/end or both at the start)

2. Movement strategy depends on the problem

- Initialize two pointers and you move them
  - towards each other
  - away from each other
  - in the same direction
- Amazing to work with arrays without relying on nested loops

## Example

Given an array of sorted integers, find two numbers such that they add up to a target number

- When you hear the array is sorted, first thing you should think of is binary search and how to use it

```js
function hasPairWithSum(nums, target) {
  let l = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return true;
    }

    sum < target ? left++ : right--;
  }

  return false;
}
```

```js
function findSum(arr, target) {
  /*  
  loop through array (outer)
    arr[i] 0
        1 2
  loop through array (inner)
    arr[j]
        1 2 3 4 5 

        if (arr[i] + arr[j] === target){
        return arr[i], arr[j]
        }
   */
}

findSum([1, 2, 3, 4, 5], 9);
```

## When to use it

Good for linear data structures

- Arrays
  - Sorted array
  - Palindrome
- Strings
- Linked lists

## Types of two pointers

1. Converging

- Left and right pointers
- Types of problems:
  - Check if string is palindrome
  - Two sum

2. Parallel

- They start at the same location
- Sliding window is a type of parallel two pointers

2. Trigger-based pointer

- They start at the beginning, we move just one pointer (front) when certain condition is met
- Then, we start moving the second pointer (back)
- Types of problems
  - Finding the nth node from the end of a linked list

## Leetcode problems

1. Move zeroes: https://leetcode.com/problems/move-zeroes/description/
