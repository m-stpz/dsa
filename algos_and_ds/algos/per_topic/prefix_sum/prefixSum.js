function prefixSum(arr) {
  /* 
    arr = [1,2,3,4]
    prefix = [0]

    as we fill it 
    prefix = [0,1, 3, 6, 10]
    prefix[i] = sum of all elements before index i
    */
  const prefix = [0]; // start the prefix array

  for (let i = 0; i < arr.length; i++) {
    /* 
        for each element in arr, append the running sum
        i                   prefix[i] + arr[i]
        i = 0 -> prefix.push(0 + 1) => 1 [0,1] (prefix arr)
        i = 1 -> prefix.push(1 + 2) => 3 [0,1,3]
        i = 2 -> prefix.push(3 + 3) => 6 [0,1, 3, 6]
        i = 3 -> prefix.push(6 + 4) => 10 [0,1, 3, 6, 10]
    */
    prefix.push(prefix[i] + arr[i]);
  }

  return prefix;
}

/* 
computes arr[left...right] in O(1) time

arr = [1, 2, 3, 4]
          0  1  2  3   4
prefix = [0, 1, 3, 6, 10] => prefix sum is 1 step ahead of the initial array


| prefix index | prefix value | represents sum of                 |
| ------------ | ------------ | --------------------------------- |
| 0            | 0            | (no elements)                     |
| 1            | 1            | arr[0]                            |
| 2            | 3            | arr[0] + arr[1]                   |
| 3            | 6            | arr[0] + arr[1] + arr[2]          |
| 4            | 10           | arr[0] + arr[1] + arr[2] + arr[3] |
*/
function rangeSum(prefix, left, right) {
  /* 
computes the sum of left and right
            left    right       
    prefix: [0,1, 3, 6, 10]
    left: 0
    right: 3 + 1 = 4

    prefix[4] - prefix[0]
    prefix[4] => sum of arr[0...4]
    prefix[0] => sum of arr[0...0]

    
    10 - 0 => 10

    prefix[3] - prefix[1]
    6 - 1 = 5
    */
  return prefix[right + 1] - prefix[left];
}

rangeSum(prefixSum([1, 2, 3, 4]), 0, 2);
