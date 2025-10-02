# Algorithms and Data Structures

Based on: https://www.youtube.com/watch?v=8hly31xKli0&t

## 1. Intro

- Algorithm: Set of steps/instructions for completing a task

  - Set of steps a program takes to finish a task

### Why learn algorithms?

1. When we talk about algorithms, we mean that there's a body of knowledge on how to solve some computational problems well
2. Understanding when to apply algorithms is as important as knowing their existence

- The most important part of DSA
- We should be able to break a problem down and identify which DSA are best placed for it
- Algorithm thinking
  - Break a complex problem into a smaller unit and be able to compose a solution to this smaller problem

3. Understanding efficiency/computational demand, both in time and space

### What is an algorithm?

1. Clearly defined problem statement, input and output
2. Steps order matter
3. Steps distinction matter
4. Must produce a result
   - Consistent results for the same of values is how we know the algorithm is correct
5. Must complete in a finite amount of time

### Algorithmic Thinking

- Clearly define what the problem set is
- Clarify what values count as inputs
- There's not a "best" solution, instead we should think what solution works better for the current problem
- Searching

  - Linear/sequential:

    1. Start at beginning
    2. Compare current value with target
    3. Move sequentially
    4. If current value is equal to target, return
    5. If end of the list and no value found, return
    6. Repeat steps 2-4 until done

  - Binary:

  1. Start at middle
  2. Compare current value with target
  3. If current value is greater than target, only focus on the left side
  4. If current value is less than target, only focus on the right side

- An algorithm needs to have a clear problem statement

  - We need to identify the inputs and define output

- Break down the problem into smaller units

### Good algorithm (Correctness & Efficiency)

1. Correctness: Capacity of algorithm of given valid inputs, terminate and produce expected output as defined in problem specification

   - Given valid inputs, it must provide expected output

2. Efficiency: Characteristic of algorithm to perform steps in an optmized manner, both in memory and computational operations
   - Time: how long it takes the algo to run
     - The less time you take, the more efficiency you are
   - Space: how much memory the algo needs

## Important Problem-Solving Patterns

### 1. Two pointers

- Effective to process sorted arrays/strings with two indices moving toward or along each other
- Initialize two pointers and you move them
  - towards each other
  - away from each other
  - in the same direction

```
1 3 5 7 11
left    right
```

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

### 2. Sliding Windows
