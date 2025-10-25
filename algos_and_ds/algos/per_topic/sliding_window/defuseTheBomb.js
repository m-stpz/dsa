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
    if k > 0: each num is replaced by sum of next 3 nums (circular)
    if k < 0: each num is replaced by the sum of prev 3 nums (circular)
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
      // sum the next 3 elements
      //   how can we make it circular?
      for (let j = 1; j <= k; j++) {
        /* 
            i: 0
            j: 2
        */
        sum += code[(i + j) % n]; // circular forward
      }

      res.push(sum);
    }

    if (k < 0) {
      for (let j = 1; j <= Math.abs(k); j++) {
        sum += code[(i - j + n) % n]; // circular backward
      }

      res.push(sum);
    }
  }

  return res;
};

decrypt([5, 7, 1, 4], 3);
