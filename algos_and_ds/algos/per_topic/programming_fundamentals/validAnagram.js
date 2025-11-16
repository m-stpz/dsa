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

== Big O ==
t: O(n + m)
    n: s.length
    t: t.length

s: O(n + m)
    n: sMap, which grows according to s.length
    t: tMap, which grows according to t.length
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

*/
