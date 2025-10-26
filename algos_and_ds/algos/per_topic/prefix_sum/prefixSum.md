# Prefix Sum

- Stores cumulative sum of elements from the start to a given index
- Technique for calculating the sum of subarrays
- When to use it?
  - Range sum queries: compute the sum of elements between two indices frequently
  - Subarray sum problems: find or count the number of subarrays that add up to a specific value

```js
function prefixSum(arr) {
  const prefix = [0];

  for (let i = 0; i < arr.length; i++) {
    prefix.push(prefix[i] + arr[i]);
  }

  return prefix;
}
```
