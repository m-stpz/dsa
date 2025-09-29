function binarySearchRecursive(target, arr, left = 0, right = arr.length - 1) {
  // base case is important for recursive!
  //   in case it was not found
  if (left > right) {
    return -1;
  }

  const midIndex = Math.floor((left + right) / 2);

  if (arr[midIndex] === target) {
    return midIndex; // or true
  }

  //   if current element is less than current mid, we need to get rid of left
  if (arr[midIndex] < target) {
    // we need to "increase" the numbers we're looking for
    return binarySearchRecursive(target, arr, midIndex + 1, right);
  } else {
    // we need to "decrease" the numbers we're looking for
    return binarySearchRecursive(target, arr, left, midIndex - 1);
  }
}

/* 
scenario 1:
   ->  0  1   2  3   4   5  6
arr = [1, 5, 10, 15, 20, 25, 30]
      left
                            right
                midIndex
target = 25

level 1:
left = 0
right = 7
midIndex = floor(0 + 7) / 2 = 3
arr[midIndex] = 15

15(midIndex) < 25(target) => we must get rid of left 
            remove  | maintain
arr = [1, 5, 10, 15 | 20, 25, 30]
                    left (mid + 1)
                                right
                        midIndex

level 2:
left = midIndex + 1 = 4
right = 7
midIndex = floor(4 + 7) / 2 = 5
arr[midIndex] = 25 -> result

==========
scenario 2:
        0 1 ...                    ...8.  9.  10 ...            13
arr = [1, 5, 10, 15, 20, 25, 30, 35, 50, 100, 200, 300, 1000, 100000]
      left
                                                                right
                            midIndex
target = 20

level 1:
left = 0
right = 13
midIndex = floor(0 + 13) / 2 = 6
arr[midIndex] = 30

30 > target => we must get rid of right
        maintain            | remove
arr = [1, 5, 10, 15, 20, 25 | 30, 35, 50, 100, 200, 300, 1000, 100000]
    left
                        right (mid -1)
            midIndex 

level 2:
left = 0
right = 5
midIndex = floor(0 + 5) / 2 = 2
arr[midIndex] = 10
*/
