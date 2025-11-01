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

*/

var maxProfitWrongFirstImplementation = function (prices) {
  let low = Infinity;
  let high = -Infinity;
  let profit = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    let currentLow = low;

    low = Math.min(item, low);
    high = Math.max(item, high);

    profit = Math.max(high - low, profit);

    if (currentLow !== low) {
      high = 0;
    }
  }

  return high > 0 ? profit : 0;
};

/**
 * t: O(n)
 *    - n: prices.length
 *    - single pass
 * s: O(1)
 *  - constant extra space
 *  - no data struc that grows with input
 */
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // only reset the minPrice if a new minPrice value is found
    minPrice = Math.min(minPrice, prices[i]);

    // get the current profit, which is the difference of the new minPrice vs. the current element
    const profit = prices[i] - minPrice;

    // only reset maxProfi if a new high profit is found
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
};

// maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([2, 4, 1]);

/* 
# Post Mortem

Problem: Best time to buy sell stock
Problem statement (one-liner): Identify the best possible day to buy and sell the stock and return the profit
Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Date: 01.11.2025

### Algorithm

1. Pattern used: finding lowest and highest nums
2. Key idea (short explanation):
    - Store minPrice and maxProfit
        - Loop through elements
        - minPrice becomes either the new min, or keep as prev min
        - profit is the difference between current element and minPrice
        - maxProfit becomes either the new profit, or keep as prev maxProfit
3. Time to design the algorithm: 40min. (but my algo didn't work well, it failed the last 20-30% of tests. I needed to search solution)
4. Time to code: 40min.
6. What solutions did I consider/miss?
    - keeping maxProfit out of the loop
    - profit being equal to currentElement - minProfit
7. Was your solution optimal?
    - Updated solution yes
8. What triggers did I find/miss?
9. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
    - Simplify and try to solve the most basic part first
11. Takeaways
    - Simplify
12. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 3
Coding: 3
Verification: 3
Communication: 4
*/
