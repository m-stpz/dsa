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

k: 11 (upper bound)
  - eating speed
  - number of times we do it
n: 3 6 7 11 
  - the length of the array

O(n * k)

11: start
  timeTaken <= h
    eatingSpeed / 2
  timeTaken > h

  
Math.floor(11/2) => 5
  what is the relationship of time and h now?

if timeTaken < h
  halve the time
if timeTaken > h
    incognita ? 
if timeTaken === h 
  good that's what we want
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

  // k number of times
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
Design with binary search

h: 8
piles: 3 6 7 11
eatSpeed: 11 

3/ 5 => 0.8 ceiling 1
6/ 5 => 1.1 ceiling 2
7/ 5 => 1.2 ceiling two (1.1...1.9) => 2
11/ 5 => 2.1 (2.1...2.9) => 3

1. good result
3 6 7 11
5 5 5 5
1 2 2 3 => timeTaken 8 === target


2.

3 6 7 11
11 11 11 11 
if eatSpeed > availableHours (halve the)
1 1 1 1 => timeTaken 4 => 4 > 8
halve the eatSpeed => 11/2 = floor(5)
          9 > 8
          timeTaken++

3. if eatSpeed < availableHours (increase the speed by 1)
    8 / 5 (new mid)

what is our left?
  minSpeed 1
what is our right?
  maxSpeed 11 => becomes 5
what is our middle?

m = (left + right) / 2 

if eatSpeed > availableHours (halve the)
m = (1 + 11) / 2 => 6

if eatSpeed < availableHours
m = (1 + 6) / 2 => 3
*/

function minEatingSpeedBinary(piles, h) {
  let eatingSpeed;
  // we need to treat this
  if (!piles.length) {
    eatingSpeed = 0;
  }

  eatingSpeed = Math.max(...piles); // 11 => eating speed
  let timeTaken = 0;

  // 1. to check when we should stop optimizing
  const lowerBound = 1;

  // k number of times
  while (eatingSpeed >= lowerBound) {
    let left = 1;
    let right = 11;
    let optimalSpeed = (left + right) / 2;
    /* 
    h: 8
    k: 6
    l: 1 
    r: 11
    timeTaken: math.ceil(piles[1]/6)
                  3, 6, 7, 11
                  1   1 1   1 => 4 < 8 
                          halve this
                          (1 + 11) /2 => 6 round 1

                  1  1  2  2 => 6 < 8
                          halve this
                          (1 )

                  
                  
    */

    // eatingSpeed 10
    // timeTaken 1
    timeTaken = 0; // clean up the time taken from previous iterations

    // 2. identify time taken to eat all banana given speed
    for (let i = 0; i < piles.length; i++) {
      const timeTakenForPile = Math.ceil(piles[i] / eatingSpeed); // 3/11 = 1 + 1 + 1 + 1
      timeTaken += timeTakenForPile;
    }

    if (timeTaken === h) {
      return eatingSpeed;
    }

    if (timeTaken < h) {
      right = optimalSpeed - 1; // reduces the speed
    } else {
      left = optimalSpeed + 1; // increases the speed
    }
  }
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
