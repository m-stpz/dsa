/* 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

/* 
Algo Design 
1 2 3 4 5 6 7
p1  
      p2
   p2+1
 
productArr = [6,24]

6 * 4 = 24

// attempt 1: 3 pointers
while (p2 < nums.length || p3 < nums.length){
    if (productArr.length){
        productArr.forEach((element) => element * nums[p2])
    }

    nums[p2](2) * nums[p2+1](3) = 6(this guy) * 4 (walked p2)
        productArr.push(6)
        p2 = +2
    
    when we get to the end 


Algo Design 
1 2 3 4
  i
j 

1[i] * 2[j] = 2 
1 * 3 = 3
1 * 4 = 4

products.push(product)



product
for (i loop){
    for (j loop){
        product = nums[i] * nums[j]
    }
}

 find the product of the number except the number itself 
}



productArr.push(nums[p2])
productArr(2,3)

2 * 3 * 4 = 24

1 * 24 = 24


Big O analysis 
t: O(n^2)
 n = the size of inputs (nums)

s: O(1)
*/

var productExceptSelf = function (nums) {
  const res = []; // extra space

  for (let i = 0; i < nums.length; i++) {
    let product = 1; // 2

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }

    res.push(product); // s: O(n)
  }

  return res;
};

productExceptSelf([1, 2, 3, 4]);
/*                    i
                  j

                product = [3]

                1 *= 1 
                1 *= 3
                3 *= 4
                */
