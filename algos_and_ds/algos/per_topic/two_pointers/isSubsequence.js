/* 
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.

constraints:
- we don't need to check empty strings
- we don't need to remove symbols, not lower case them
*/

/* 
s: abc 
t: ahbgdcz

a b x
p1 
- if p1 moves forward only on match, if at the end of the loop, it's not at the end of its array, it's not a subquence

counter of matches
if counter of matches === s.length it means that all strings were matched 

a b c
    p1

a h b g d c z
          p2

p2 = p1+1

while within bounds p1 and p2
    if p1 === p2:
        p1++

    p2++
    once we found a non match, return false

- when do we know we have all elements?
- if we looped successfully, it means it's a subset
    else we must break out of the loop
- how to we know we haven't got a subsequence?
    - if we break the loop and p1 isn't at the end

return true (loop ran fully)

Big O analysis
t: O(t)
    - t is the input size of t
    - loop until the end of t 
s: O(1)
    - two variables + arithmetic operations ++
*/
var isSubsequence = function (s, t) {
  let counter = 0;
  let p1 = 0;
  let p2 = 0;

  while (p2 <= t.length) {
    // it's a match
    if (s[p1] === t[p2]) {
      counter++;
      p1++;
      p2++;
    } else {
      p2++;
    }

    if (counter === s.length || s === "") {
      return true;
    }
  }

  return false;
};

isSubsequence("", "ahbgdc");

/* 
# Post Mortem

Problem: Is subsequence
Problem statement (one-liner): Identify whether a subsequence exists within given string
Link: https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=top-interview-150
Date: 17.10.2025

### Algorithm

1. Pattern used: Two pointers
2. Key idea (short explanation): 
    - Loop until the end of t
    - if s[p1] === t[p2]:
        walk p1 and p2
        increase the counter

    - if, at the end, counter is equal to s.length, it means that all elements have been matched, therefore a subset
3. Time to design the algorithm:
    - 20-25min
4. Time to code:
    - 5-10 min
5. Big O analysis:
   t: O(t)/ Explanation: where t is the size of the input t
   s: O(1)/ Explanation: no extra data structure created. just pointer manipulation
6. What solutions did I consider/miss?
    - Used two pointers correctly
    - Identified well the need for "counter"
7. Was your solution optimal? Yup
8. What triggers did I find/miss?
9. Any mistakes I keep making?
    - Not on this one
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
11. Takeaways
12. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 5
Coding: 5
Verification: 5
Communication: 5
*/
