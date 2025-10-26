/* 
You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.

As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

Example 1:
Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

Example 2:
Input: code = [1,2,3,4], k = 0
Output: [0,0,0,0]
Explanation: When k is zero, the numbers are replaced by 0. 

Example 3:
Input: code = [2,4,9,3], k = -2
Output: [12,5,6,13]
Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.

Algo design 
code = nums arr
k = key
    if k > 0: each num is replaced by sum of next K nums (circular)
    if k < 0: each num is replaced by the sum of prev K nums (circular)
    if k == 0: nums are replaced by zero

code = [5,7,1,4], k = 3
Output: [12,10,16,13]

[7+1+4, 1+4+5, 4+5+7, 5+7+1]

since k > 0 (current element becomes sum next 3 elements)
5 7 1 4 
  ^
  5: 7 + 1 + 4 = 12 push
    - we shouldn't replace "in place" because we will get different results
    - create res array 
  7: 1 + 4 + 5 = 10 push   
  1: 4 + 5 + 7 = 16 push
  4: 5 + 7 + 1 = 13 push
res = [12, 10, 16, 13]


window that goes from 
go until the end 
5 7 1 4
^
      ^

let sum = 

7 + 1 + 4
res = []

outer loop
    code = 0

    - identify the operation based on k 
    if k === 0:
        res.push(0)
    
    if k > 0:
        inner loop that goes left to right
        if i !== j: 
            sum += nums[j]

    if k < 0:
        inner loop that goes right to left 

The biggest challenge in this problem is the "circular nature" of the array
- how can we ensure the circularity both backwards and forwards?
    - forward: j % n
    - backward: (j + n) % n
*/

/* 
Big O
t: O(n^2)
    - nested loop
s: O(n)
    - new array to keep the res
*/
var decrypt = function (code, k) {
  const n = code.length;
  const res = [];

  for (let i = 0; i < n; i++) {
    let sum = 0;

    if (k === 0) {
      res.push(sum);
    }

    if (k > 0) {
      /* 
        replace it by the next K numbers
        j = 1 because we visit the next element and go upwards only to k
            - that's the "window"
        i + j % n => forward index
        3 + 1 % 4 => 0, this way, we make it circular and don't go out of bounds
        3 + 2 % 3 => 1, instead of 5, we go to one
      */
      for (let j = 1; j <= k; j++) {
        /* 
            i = 1 (second iteration)
            j = 3 (last element)
            1 + 3 = 4 (index which would go out of bounds in an array with length 4)
            1 + 3 % 4 (length) = 0, therefore we "go back" 
        */
        const forwardIndex = (i + j) % n;

        sum += code[forwardIndex]; // circular forward
      }

      res.push(sum);
    }

    if (k < 0) {
      for (let j = 1; j <= Math.abs(k); j++) {
        /* 
        backward index
        (i - j + n)  % n

        i: 0
        j: 1
        (i - j + n) % n
        (0 - 1 + 4) % 4 = 3 % 4 = 3 (index)
        */
        const backwardIndex = (i - j + n) % n;
        sum += code[backwardIndex];
      }

      res.push(sum);
    }
  }

  return res;
};

// decrypt([2, 4, 9, 3], -2);

/* 
Post algo notes
- The most challenging thing with this algo is the circular nature
    - Not only that, it's a circular forward and backward

- Confusing stuff
1. sum += code[(i + j) % n]; // forward circular 

k > 0
    - forward case

code = 5 7 1 4
k = 3
n = 4

for (let i = 1; j <= k; j++){
    sum += code[(i + j) % n]
}

2. sum += code[(i - j + n) % n]; // backward circular 
3. in (let j = 1; j <= k; j++).. 
    why: j = 1? 
    and: j <= k?
*/

function decryptII(code, k) {
  const n = code.length;
  const step = k > 0 ? 1 : -1;
  const res = [];
  const count = Math.abs(k);

  for (let i = 0; i < n; i++) {
    if (k === 0) {
      res.push(0);
      continue;
    }

    let sum = 0;

    for (let j = 1; j <= count; j++) {
      const index = (i + j * step + n) % n;
      sum += code[index];
    }

    res.push(sum);
  }

  return res;
}

decryptII([2, 4, 9, 3], -2);

/* 
# Post Mortem

Problem: Defuse the bomb
Problem statement (one-liner): Given a code and a key (k), decrypt the code 
Link: https://leetcode.com/problems/defuse-the-bomb/
Date: 26.10.25

### Algorithm

1. Pattern used: 
    - Circular array 
    - Using n, step, count to design circular movements
2. Key idea (short explanation):
    - Create an outer loop to go over all elements
    - Create an inner loop that moves within the array bounds (circular) with mod operations and within k bounds
        for (let j = i; j <= k; j++){
            const index = (i + j * step + n) % n
            sum += arr[index]
        }

3. Time to design the algorithm: 60min
4. Time to code: 60min
5. Big O analysis:
   t: O(n*k)/ Explanation:
    n = the input size of code
    k = the window we're given 
   s: O(n)/ Explanation:
    n = the input size
    the result array scales according to the input size
6. What solutions did I consider/miss?
    - I considered the nested loop
    - I tried using the sliding window, but had difficulty to implement it 
    - I identified the "concept" of circular array, but didn't know how to implement it. Took notes on it 
7. Was your solution optimal?
    - Not necessarily, but good enough
8. What triggers did I find/miss?
    - I identified the circular array need 
9. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
    - Not sure, quite glad with the result and learning process
11. Takeaways
    - Understand how to work with circular arrays
    - Learn more about prefix sum
12. Is there anything I should add to my cheat sheet?
    - Circular array and prefix sum

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 3
Coding: 3
Verification: 3
Communication: 4
*/
