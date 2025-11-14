/* 
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

== Algo design == 
haystack = "sadbutsad", needle = "sad"

sadbutsad | sad
 ^              
             ^ 

firstOcc = 0
              
if match, move p2
if it doesn't, reset p2
if get to the end, and all elements match, return first index
if counter is equal to needle's length, break the loop, and return initial index

== Pseudo code == 
firstOcc = -1;
matches = 0;
p1 = 0;
p2 = 0;

loop over haystack
        it means we matched all elements 
    - if matches === needles.length
        return firstOcc
    
    - if hay[i] === needle[i]
        p2++
        matches++

        // we don't want to reset an existing firstOcc
        if (firstOcc < 0){
            firstOcc = i
        }
    
    - if hay[i] !== needle[i]
        p2 = 0; // reset
        matches = 0;
        firstOcc = -1 

return firstOcc

== Big O ==
t: O(n)
    n = haystack.length 
s: O(1)
    no extra memory 
    no memory that grows relative to the input
*/

var strStr = function (haystack, needle) {
  let firstOcc = -1;

  if (needle.length > haystack.length) {
    return firstOcc;
  }

  let pNeedle = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (pNeedle === needle.length) {
      return firstOcc;
    }

    if (haystack[i] === needle[pNeedle]) {
      pNeedle++;

      // only change the existing value
      if (firstOcc === -1) {
        firstOcc = i;
      }
    } else {
      pNeedle = 0;
      firstOcc = -1;
    }
  }

  return firstOcc;
};

// strStr("sadbutsad", "sad");
// strStr("aaaa", "aaa");
strStr("mississippi", "issip");

/* 
Algo design II

sadbutsad | sda
 i
            j 

firstOcc =  1           
if i != j:
  don't walk j 

  but if j, reset it

if j == needle.length
  return firstOcc


*/

/**
 * Big O
 * t: O(n * m)
 *  n = haystack.length
 *  m = needle.length
 * s: O(1)
 */
function strStrBrute(haystack, needle) {
  const possibleRange = haystack.length + 1 - needle.length; // ensure there's enough room to fit the needle

  // what if the needle starts here?
  for (let i = 0; i < possibleRange; i++) {
    for (let j = 0; j < needle.length; j++) {
      // this stops the substring once any mismatch is found and returns to the outer loop
      if (haystack[i + j] !== needle[j]) {
        break;
      }

      if (j === needle.length - 1) {
        return i;
      }
    }
  }

  return -1;
}

strStrBrute("mississippi", "issip");

/* 
# Post Mortem

Problem: Find substring within string 
Problem statement (one-liner): Find a needle in the haystack 
Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
Date: 14.11.25

### Algorithm

1. Pattern used: Nested loops 
2. Key idea (short explanation): 
  - Outer loop: what if the string started here?
    - Inner loop: let's check whether they match
      haystack[i + j] !== needle[j] => this is really important!
        especially: haystack[i + j]: this is how we "walk" our haystack in combination with our needle
    - if j === needle.length -1 (meaning, we go to the end)
      we've got our result
3. Time to design the algorithm: 1h30 (I needed to watch videos and search)
4. Time to code: 20min
5. What solutions did I consider/miss?
  - I couldn't solve this by myself
  - Considered:
    - j as the "counter" pointer. if it was the same as the needle, done
    - looping through them "together"
  - Missed:
    - Using nested loops for it 
    - Tried to use two pointers, unsucessfully. My original code worked up to certain points, but hit many edge-cases
    - Outer loop "respecting" the needle's length (possibleRange)
6. Was your solution optimal?
    - The one I search and implemented, yeah
7. What triggers did I find/miss?
8. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
   - Be careful about the index and length of the array when matching them
9. What could I have done differently?
  - Maybe trying brute force first?
10. Takeaways
  - Sometimes, you've got to search. That's fine 
11. Is there anything I should add to my cheat sheet?
  - Checking indexes against arr.length

### Self-rating

1(terrible) - 5(amazing)

Problem solving:
Coding:
Verification:
Communication:
*/
