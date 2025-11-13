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
      i--;
    }
  }

  return firstOcc;
};

// strStr("sadbutsad", "sad");
// strStr("aaaa", "aaa");
strStr("mississippi", "issip");
