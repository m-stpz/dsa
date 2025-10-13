# Sliding Window

- Uses two pointers to create a window and slide them over a data structure
- Good to identify subarrays, substrings
- Efficiency way to process a subset of data

## Principles

```
1. Start the window

for let i = 0 until < k

2. Pick up from init window
for let i = k until end array

3. remove element
sum -= nums[i - k]

4. add element
sum += nums[i]

```

## Types

### Fixed sliding window

It keeps a constant length as it slides through the data structure

- window size is known from the start
- find subarrays or substrings of a fixed length

```js
function slidingWindow(nums, k) {
  let start = 0; // left of the window
  let end = 0; // right edge
  let windowSum = 0;
  let maxSum = -Infinity;

  while (end < nums.length) {
    // expand window
    windowSum += nums[end];

    // when window hits the size k (fixed-size)
    if (end - start + 1 === k) {
      maxSum = Math.max(maxSum, windowSum);

      // slide the window forward
      windowSum -= nums[start];
      start++;
    }

    end++;
  }

  return maxSum;
}
```

### Dynamic sliding window

- Good for "find longest or shortest subarray/substring that satisfies a condition"

```js
function slidingWindowDynamic(nums, target) {
  let start = 0;
  let end = 0;
  let windowSum = 0;
  let minLen = Infinity;

  while (end < nums.length) {
    windowSum += nums[end]; // expand window

    // shrink while condition is met or violated
    while (windowSum >= target) {
      minLen = Math.min(minLen, end - start + 1);
      windowSum -= nums[start];
      start++;
    }

    end++;
  }

  return minLen === Infinity ? 0 : minLength;
}
```

## Leetcode

https://leetcode.com/problem-list/sliding-window/
