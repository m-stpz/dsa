/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

=== Algo Design === 


we need to keep track of where they appeared
    - once we find a new lowest, we need to "reset" highest
        - we need to check if lowest has changed
        highest = 0

[7,1,5,3,6,4]
           ^

    low = 1
        when low changes, reset high
            keep track of the current low value and if in the next iteration it's different, high must be reset
    high = 6

   lowest_point = (nums[i], lowest_point)
 
7,6,4,3,1
        ^

low = undefined
high = undefined

loop:
    let currentLow = low

    low = math.min(nums[i], low)
    high = math.max(nums[i], high)

    if (currentLow !== low){
        high = 0 
    }

    low = 4
        - low changed, reset high
    high = 0

    if high === 0:
        return 0 
    else return high - low 

2 4 1 
    ^

low = 2 (once it becomes one)
    1
high = 4

lastValidProfit = 2 
currentProfit = 
    3
    even though we have found a new low, we should keep profit
    we should return the maximum profit
    we would "reset the profit", but then we'd need to have the highest "valid' possible profit
        - fact that high is "before" the new low
        - how to avoid it becoming 3?
            - if new low is after high?
            - the profit should not change if new low comes after high index
        2 not 3

output: 2
 - how?
*/

// TO CONTINUE
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    const profit = prices[i] - minPrice;

    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
};

// let minPrice = Infinity;
// let maxProfit = 0;
// for (let i = 0; i < prices.length; i++) {
//   minPrice = Math.min(minPrice, prices[i]);
//   const profit = prices[i] - minPrice;
//   maxProfit = Math.max(maxProfit, profit);
// }

// return maxProfit;

// maxProfit([7, 1, 5, 3, 6, 4]);

maxProfit([2, 4, 1]);
