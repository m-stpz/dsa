/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

== Algo design ==
- it wasn't mentioned that their length was equal, so we should check 
    - s and t length != return false
- create maps 
    - check the keys 

- if the count or the keys don't match, return false
- return true 

anagram | nagaram

map
letter:count
{
a:3
n:1
g:1
r:1
m:1
}

{
n:1

}

== Big O == Wrong
t: O(n + m)
    n: s.length
    t: t.length

s: O(n + m)
    n: sMap, which grows according to s.length
    t: tMap, which grows according to t.length

Big O correct
t: O(n)
    s.length === t.length 
    n: input.length

s: O(1)
   grow proportional to distinct characters (max. 26)
   therefore: O(1)
*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] ?? 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    tMap[t[i]] = (tMap[t[i]] ?? 0) + 1;
  }

  for (let [key, value] of Object.entries(tMap)) {
    if (!sMap[key] || sMap[key] !== value) {
      return false;
    }
  }

  return true;
};

/* 
# Post Mortem

Problem: valid anagram 
Problem statement (one-liner): Check if t is a valid anagram of s
Link: https://leetcode.com/problems/valid-anagram
Date: 16.11.25

### Algorithm

1. Pattern used: hash tables 
2. Key idea (short explanation):
    - create two maps, one for s and another for t
    - compare if all the keys and values match between them 
3. Time to design the algorithm: 10min (fastest so far)
    - got right in the first go
4. Time to code: 10 min (very fast)
5. What solutions did I consider/miss?
    - Considered:
        - hash tables
        - comparing keys/values
    - Missed:
        Big O t:
            Big O analysis was wrong. Since, s and t have the same length, the algo is NOT O(n + m), 
            but instead O(n) since THEY HAVE THE SAME LENGTH!
            - Single pass s -> O(n)
            - Single pass t -> O(n) (same length)
            - Single map map -> O(1) (max. 26 keys)
        Big O s:
            Another mistake was done in the space complexity. I wrote O(n+m), but this is mistaken.
            They don't grow proportional to s or t, but to the distinct characters, which can be max 26. 
            Thefore, space is O(1)
6. Was your solution optimal?
    - quite good, but let's see if it can be improved
7. What triggers did I find/miss?
8. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
9. What could I have done differently?
10. Takeaways
11. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 5
Coding: 5
Verification: 5
Communication: 5
*/
