/*
instead of checking the whole array, grab the midpoint
if midpoint is greater than value, remove right
if midpoint is less than value, remove left
[1, 5, 10, 15, 20, 25, 30];
left
                 right

       mid -> compare mid with value, then move either left or right pointers

=====
for example, let's say our target is 20
1. grab midpoint (in this case, 15)
2. compare midpoint to target (15 & 20) -> 15 < 20 (meaning, that we should only go up)
3. identify portion of discart (left or right)
    if target is greater than mid, keep only right
    if target is less than mid, keep only left
4. do steps 1-3 until target is found
    if no target is found, return -1
*/

function binarySearch(target, arr) {
  // initialize left and right indexes
  let left = 0;
  let right = arr.length - 1; // even though arrays are 0-indexed, their length is not

  while (left <= right) {
    // the mid shouldn't be the arr.length, instead it should be the two pointers
    // mid needs to take into account left and right!
    let midIndex = Math.floor((left + right) / 2); // in tihs case, 7 => 7/2 => floor(3.5) => 3

    // if the element at the midIndex
    if (arr[midIndex] === target) {
      return arr[midIndex];
    }

    /*
    if target is greater
    arr[midIndex] = 15
    target = 20

    15 < 20 -> we need to increase left + 1, effectively removing prev left (1, 5, 10, 15)
     */
    if (arr[midIndex] < target) {
      left = midIndex + 1;
    } else {
      // else, we'd remove the prev right (15, 20, 25, 30)
      right = midIndex - 1;
    }
  }
  return -1;
}

binarySearch(20, [1, 5, 10, 15, 20, 25, 30]);
