/* 
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.


Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
*/

function minEatingSpeed(piles, h) {
  /* 
    counter = min_k

    [3,6,7,11]
    0 0 0 1
          0 

    ====
    iterate the piles while any piles[i] is greater than 0
        - let's provide a specific number (10)
        - if 10 > piles[i]
            piles = 0 
        - if 10 < piles[i]
            piles[i] = piles[i] - 10
         
    =====
    how can we figure out speed?
        start with max_k = greatest piles[i]
            if hours_taken > total_
            
    */
}

/*  
h = 8 

piles = [3,6,7,11]
        0  0 0 1  
        1  1 1 1
               1 = 5h

3 + 6 + 7 + 11 = 
    9       18
        27 (total amount of bananas)

27/8 = 3,37 

8(guards time) - 5(k 10 speed)
k = 10

min_k = 1 banana per hour
    what is the minimum speed that she can finish it up?
        without the guards => 27 
max_k = 11 (will always be the greater pile)

h => 4 -> because our h must be greater than or equal to the piles.length
    piles.length <= h <= 109
*/
