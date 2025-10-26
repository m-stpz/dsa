# Prefix Sum

- Stores cumulative sum of elements from the start to a given index
- Technique for calculating the sum of subarrays
- When to use it?
  - Range sum queries: compute the sum of elements between two indices frequently
  - Subarray sum problems: find or count the number of subarrays that add up to a specific value

## Core pattern

```js
const prefix = [0]; // simplifies math

for (let i = 0; i < arr.length; i++) {
  prefix.push(prefix[i] + arr[i]);
}
```

## Range sum

- `prefix[b] - prefix[a]` gives sum between `a` and `b-1`

```js
// then, because prefix[0], we need here to add + 1
return prefix[right + 1] - prefix[left];
```

```js
function prefixSum(arr) {
  /* 
    arr = [1,2,3,4]
    prefix = [0]

    as we fill it 
    prefix = [0,1, 3, 6, 10]
    prefix[i] = sum of all elements before index i
    */
  const prefix = [0]; // start the prefix array

  for (let i = 0; i < arr.length; i++) {
    /* 
        for each element in arr, append the running sum
        i                   prefix[i] + arr[i]
        i = 0 -> prefix.push(0 + 1) => 1 [0,1] (prefix arr)
        i = 1 -> prefix.push(1 + 2) => 3 [0,1,3]
        i = 2 -> prefix.push(3 + 3) => 6 [0,1, 3, 6]
        i = 3 -> prefix.push(6 + 4) => 10 [0,1, 3, 6, 10]
    */
    prefix.push(prefix[i] + arr[i]);
  }

  return prefix;
}

function rangeSum(prefix, left, right) {
  /* 
computes the sum of left and right
            left    right       
    prefix: [0,1, 3, 6, 10]
    left: 0
    right: 3

    prefix[3+1]
    */
  return prefix[right + 1] - prefix[left];
}
```

### Leetcode Problems

https://leetcode.com/problem-list/prefix-sum/
