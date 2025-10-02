/* 
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.


Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
*/

/* 
updated Big O
t: O(n * k)
 n = piles
 k = maximum eating speed (11)
s: O(1)
*/

function minEatingSpeed(piles, h) {
  let eatingSpeed;
  // we need to treat this
  if (!piles.length) {
    eatingSpeed = 0;
  }

  eatingSpeed = Math.max(...piles); // 11 => eating speed
  let timeTaken = 0;

  // 1. to check when we should stop optimizing
  const lowerBound = 1;

  while (eatingSpeed >= lowerBound) {
    // eatingSpeed 10
    // timeTaken 1
    timeTaken = 0; // clean up the time taken from previous iterations

    // 2. identify time taken to eat all banana given speed
    for (let i = 0; i < piles.length; i++) {
      const timeTakenForPile = Math.ceil(piles[i] / eatingSpeed); // 3/11 = 1 + 1 + 1 + 1
      timeTaken += timeTakenForPile;
    }

    //
    if (timeTaken <= h) {
      // we reduced to find the moment that we crossed the lower limit
      eatingSpeed--;
    } else {
      eatingSpeed++;
      return eatingSpeed;
    }
  }

  return eatingSpeed;
}

minEatingSpeed([3, 6, 7, 11], 8);

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
