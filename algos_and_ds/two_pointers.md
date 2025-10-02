# Two pointers

- Pattern for solving problems on arrays, strings, or linked lists efficiently
- Instead of using nested loopsl you strategically move two indices (pointers) to reduce time complexity, often from O(n^2) to O(n)

1. Two indices moving over a sequence

   - Typically left and right pointers (sometimes fast and slow)
   - They start at different positions (beginning/end or both at the start)

2. Movement strategy depends on the problem

### Problem

Given an array of sorted integers, find two numbers such that they add up to a target number

- When you hear the array is sorted, first thing you should think of is binary search and how to use it

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
