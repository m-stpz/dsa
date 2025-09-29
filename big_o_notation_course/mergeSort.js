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

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); //slice from the beginnig until the middle
  const right = mergeSort(arr.slice(mid));

  // merge it
  return merge(left, right);
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
    // add them in order

    /* 
    2358 | 1479
    0123    0123

    2 > 1 = add from right, and increase index
        i
    2 < 4 =
    */
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // it's important that we return everything until the SLICED INDEX
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}
