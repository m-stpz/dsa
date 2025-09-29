/* 
[2,8,5,3,9,4,1,7]

2,8,5,3 | 9,4,1,7

2,8 | 5,3 | 9,4 | 1,7 

2 | 8 | 5 | 3 | 9 | 4 | 1 | 7 => ready to sort

28 | 35 | 49 | 17 => temp arrays are sorted

2358 | 1479

123456789
*/

function mergeSort(arr) {
  // since this is recursive, we need a base case!
  if (arr.length <= 1) {
    // or arr.length < 2
    return arr;
  }

  // O(log n)
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); //slice from the beginnig until the middle
  const right = mergeSort(arr.slice(mid));

  // merge it
  return merge(left, right); // O(n)
}

// merge will always take ordered arrays
function merge(left, right) {
  // new array
  // two pointers
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // loop through them and then add them in order
  // while left and right have elements
  while (leftIndex < left.length && rightIndex < right.length) {
    /* 
    add them in order
    
    2358 | 1479
    0123    0123

    2 > 1 = add from right, and increase right index
    2 < 4 = add from left, increase left index

    increase the index of the side that has been used
    */
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  /*   it's important that we return everything until the SLICED INDEX
  this way, we make sure that all elements are correctly added, even if we get to a circumstance that 
    left.length = 2
    leftIndex = 2 => meaning, we still haven't added the last element

    right.length = 2
    rightIndex = 3
    then, we break the loop

  */
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];

  // return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

/* 
merge

result_arr = []
leftIndex = 0
rightIndex = 0

== Iteration 1 ==
leftArr     rightArr
3, 12, 16 | 1, 6, 15
0  1   2    0  1  2
^ => leftIndex
            ^ => rightIndex

3 > 1 => push the right rightArr[rightIndex] and increase it

== Iteration 2 ==
result_arr = [1]
leftIndex = 0
rightIndex = 1

Iteration 1
leftArr     rightArr
3, 12, 16 | 1, 6, 15
0  1   2    0  1  2
^ => leftIndex
               ^ => rightIndex

3 > 6 => push the leftArr[leftIndex] and increase it
*/
