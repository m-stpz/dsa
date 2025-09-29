# Big O Notation

Based on: https://www.youtube.com/watch?v=Mo4vesaut8g

## What is Big O?

- Big O: Used to analyze the efficiency of an algorithm as its inputs grow
- Ignore the constants. But, what is a constant?
  - Constant: any step that doesn't scale with the input
  - We only care about the worst possible scenario

```js
function constants(arr) {
  const result = 100 * 1000; // constant -> doesn't scale with the input

  return resul;
}

// O(n)
function linearFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    const something = 4000 * 400000;
  }
}

// O(1)
function constantFunc(arr) {
  return 100 * 10000;
}
```

Orders of growth

| Order      | Growth rate                |
| ---------- | -------------------------- |
| O(1)       | Constant                   |
| O(log n)   | Logarithimic               |
| O(n)       | Linear                     |
| O(n log n) | Linearithimic / log-linear |
| O(n^2)     | Quadratic                  |
| O(n^3)     | Cubic                      |
| O(2^n)     | Exponential                |
| O(n!)      | Factorial                  |

## O(n^2) - Quadratic

```js
function square(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

/* square(4)
             i j   i,j   i, j  i, j 
iteration 1: 0,0 | 0,1 | 0,2 | 0,3
iteration 2: 1,0 | 1,1 | 1,2 | 1,3
iteration 3: 2,0 | 2,1 | 3,2 | 2,3
iteration 4: 3,0 | 3,1 | 3,2 | 3,3

Matrix (square matrix)
col(0)|col(1)|col(2)|col(3) 
00 | 01 | 02 | 03 row(0) 
10 | 11 | 12 | 13 row(1)
20 | 21 | 22 | 23 row(2)
30 | 31 | 32 | 33 row(3)

To get the area of a square, we just multiple the height with the width (in this case the rows with the cols)
4x4 = 16
4^2 = 16
*/
```

## O(n^3) - Cubic

```js
// 3d dimensional array
function cube(n) {
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      for (let z = 0; z < n; z++) {
        console.log(x, y, z);
      }
    }
  }
}

cube(2); // 2 * 2 * 2 => 4 * 2 => 8

/* 
// coordinates (x,y,z)
row col depth
x   y   z
0   0   0
0   0   1
---- => first "x" row
1   0   0
1   0   1
---- => we completed the first "floor"
0   1   0
0   1   1
---- => first "y" level built
1   1   0
1   1   1
...

Imagine creating a cube where, you begin at x: 0, y: 0, z: 0

then you fill in all z cubes in x: 0, with y:0
then, go to x: 1, then x:2, then:3

once this is ready, you go to the next level
*/
```

We could change this algorithm slightly to first fill in the x, then y, then z, meaning first the "front", then start adding to the back

```js
function cubeFillXThenYThenZ(n) {
  for (let z = 0; z < n; z++) {
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        console.log({
          x,
          y,
          z,
        });
      }
    }
  }
}

// coordinates (x, y,z)
000
100
--- now go to "y"
010
110
--- "front" completed, now, we go to the back
001
101
---
011
111

// 8 => volume of this cube
```

## O(log n)

- Logarithm: number^number = some number
  - A power that a number needs to be raised to get some other number
- In computer science, the base number is usually two, therefore, if we want to know the log of 8, we do:
  - We want to raise some number to some power to get 8
  - In computer science, unless specified otherwise, we can always assume that the number we want to raise by some power is 2
    - 2^n = <some-number> (8, in this case)
      - How many times must I multiply 2 **by itself** to reach <some-number>? => that's the log
      - What power do we need to raise "2" by to get <some-value>?

```txt
- 2 is the base in computer science, only if specified otherwise that it's not
2^? = 8 => what exponent would work to get to 8?

2 * 2 = 4 -> exponent 2 doesn't work (2 repeated twice)
2 * 2 * 2 = 8 -> exponent 3 works (2 repeated three times works)

Therefore

2^3 = 8
log(2)8 = 3 => Log base 2 of 8 is 3

Meaning, we need to have a 3 exponent so that 2 is equal to 8
```

```js
function recursiveLogFunc(n) {
  if (n === 0) {
    return "Done";
  }

  n = Math.floor(n / 2);
  return recursiveLogFunc(n);
}

logFunc(8);

// 8 / 2 = 4 (level 1) -> this value is passed recursively to the function
// 4 / 2 = 2 (level 2)
// 2 / 2 = 1 (level 3) -> here we stop, since we can't continue without getting fractions

// we took 3 steps to get to the base case
```

- Division is the inverse of multiplication
- Log is the inverse of exponentiation

> We needed to multiply 2 by itself 3 times to get to 8, as we neeed to divide 8 by two (halve) three times to get to 1

### O(n log n) - Iterative/non-recursive

```js
// the base of halving is:
function log(n) {
  while (n > 1) {
    n = Math.floor(n / 2);
  }
}

/* 
Math.floor(5/2) => 2 (instead of 2)

n = 8
iteration 1: 8/2 = 4
iteration 2: 4/2 = 2
iteration 3: 2/2 = 1
*/
```

## Binary search & O(log n)

- Binary search needs ordered array

> See binary_search_iterative.js and binary_search_recursive.js

## O(n log n)

```js
function nLogNFunc(n) {
  let y = n; // keeps the original value for n

  // log n => because n is halved at each iteration
  while (n > 1) {
    n = Math.floor(n / 2);

    // n => loops through the whole initial array
    for (let i = 1; i <= y; i++) {
      console.log(i);
    }
  }

  // log n * n = n log n
}

nLogFunc(4);

/* 
iteration 1
n = 4
4 / 2 = 2
logs: 1, 2, 3, 4

iteration 2
n = 2 
2 / 2 = 1 (stop)
logs: 1, 2, 3, 4

=====
O(log n)
O(log 2 4) => in computer science two is always the log base, except when stated otherwise
log2 4 => 2: log base 2 of 4 is two
because 2^2 = 4
*/
```

## Merge Sort

- Usually done recursively
- Merge sort works with divide and conquer
- The array is halved until we have arrays of length one
  - The array of length 1 is already sorted

> See mergeSort.js

### Merge Sort complexity deep dive

```js
/*  
n => the length of our array

example arr: [0,5,10, 2,12]
          length 5

          index is 0 based, length isn't

log base 2 of 5 is 2.32, but 👉 In merge sort complexity, we usually take the ceiling when reasoning about recursion depth
log(2)5 = 3
*/

function mergeSort(arr) {
  // base case => when we leave it
  if (arr.length <= 1) {
    return arr;
  }

  // divide and conquer
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// takes already sorted arrays and compares them

function merge(left, right) {
  const result = [];
  const leftIndex = 0;
  const rightIndex = 0;

  /* 
  [0,5,10][2,12]
  [0, 2, 5, 10] => here, we "break" the loop, because leftIndex > left.length (3)
    0 -> leftIndex+1
    5 -> leftIndex+1
    10 -> leftIndex+1

    leftIndex(3) > left.length(2) => break the loop, but I still need "12"

    That's why we need this return 
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];

    2 -> rightIndex+1
    right.slice(1) from 1 onwards, add all the missing elements
  */

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++; // we don't want to repeat this same element
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // add all the missing elements, which will already be sorted
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}
```

## Fibonacci & Exponential Complexity

```js
/* 
Exponential
This fib is O(2^n)

Recursion 1
fib(4)
n = 4


*/
function fib(n) {
  // base case 1
  if (n === 0) {
    return 0;
  }

  // base case 2
  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}
```
