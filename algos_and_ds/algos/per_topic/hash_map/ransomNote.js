/* 
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

ransomNote = "aa", magazine = "aab"

count = 2

a a  
    p1

a a b 
    p2


while (p2 < str2.length)
if str1[p1] === str2[p2]
    count++
    p1++
    p2++
else:
   p2++


str1: "aab"
str2: "baa"

- Two pointers here doesn't work. We'll need to use a map

str1
{
    a: 2,
    b: 1
}

str2 
{
    a: 2,
    b: 1
}

3 loops?
1. create ransom note map
2. create magazine map
3. compare them?
*/

/* 
big O analysis 
t: O(n + m)
  - we loop through each string 
  n: ransomNote.length
  m: magazine.length
s: O(n + m)
  - we store all unique characters of given string
  n = the input size of ransom note
  m = input size of magazine
*/
var canConstruct = function (ransomNote, magazine) {
  let rnMap = {};
  let magMap = {};

  // create ransomNoteMap
  for (let i = 0; i < ransomNote.length; i++) {
    createKeyOrAddValueToMap(rnMap, ransomNote[i]);
  }

  // create magazineMap
  for (let j = 0; j < magazine.length; j++) {
    createKeyOrAddValueToMap(magMap, magazine[j]);
  }

  // compare their ocorrences
  for (const [key, rnValue] of Object.entries(rnMap)) {
    const maganizeValue = magMap[key];

    // magMap[key] => we're already checking that specific value
    // so, we can magMap[key] < rnValue
    if (!maganizeValue || maganizeValue !== rnValue) {
      return false;
    }
  }

  return true;
};

function createKeyOrAddValueToMap(object, key) {
  if (object[key] === undefined) {
    object[key] = 1;
  } else {
    object[key] += 1;
  }
}

canConstruct("aab", "baa");

/* 
# Post Mortem

Problem: Ransom note
Problem statement (one-liner): Check whether ransom note can be created by maganize letters
Link: https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
Date: 20.10.2025

### Algorithm

1. Pattern used: Hash map
2. Key idea (short explanation):
  - Create a ransom note and maganize map
  - For each letter, add a key-value pair on this map
  - If all the entries in maganize are present on ransom note map, on the same quantity, return true, else false
3. Time to design the algorithm: 25-30min
4. Time to code: 20-25min
5. Big O analysis:
   t: O(n+m) / Explanation:
    - We loop through each entry, sequentially
   s: O(n+m) / Explanation:
    - We store each invididual character
6. What solutions did I consider/miss?
  - I considered using a hash map to check the values
7. Was your solution optimal?
  - I'm proud of it, but it's not the most optimal
  - I have 3 loops and 2 maps
8. What triggers did I find/miss?
9. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
11. Takeaways
  - Important to know how to compare the keys and values of dictionaries
12. Is there anything I should add to my cheat sheet?
  - Comparing dictionaries

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 3
Coding: 3
Verification: 4 
Communication: 4
*/
