/* 
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

=== Algo Design === 
case 1:
word1 = "abc", word2 = "pqr"

loop through both strings only once
    - important cases
        - if there's element into word1, but not in word2 and vice-versa
        - if there's element in both words, prioritize word1
            - if p1 === p2:
                add p1
            - else:
                add p2 

a b c 
  p1

p q r 
p2

a b c d 
  ^
a e
  ^

a a b e  

p1 = 1
p2 = 0
i = 0
result = ""

while(word1.length || word2.length){
    if(word1[i] && !word2[i]){
        result.push(word[1])
    }

    i++
}

=== Big O ===
t: O(n+m)
    - traverse elements, where:
        -n: word1.length
        -m: word2.length 
s: O(n+m)
    - string grows 
*/

var mergeAlternately = function (word1, word2) {
  let p1 = 0;
  let p2 = 0;
  let i = 0;
  let res = "";
  let boundaries = word1.length + word2.length;

  while (i < boundaries) {
    // dealing with scenario where one of them is empty
    if (word1[p1] && !word2[p2]) {
      res += word1[p1];
    }

    if (!word1[p1] && word2[p2]) {
      res += word2[p2];
    }

    // dealing with scenario where both exist
    if (word1[p1] && word2[p2]) {
      // we need to check whether we add left or right
      if (p1 === p2) {
        res += word1[p1];
        p1++;
      } else {
        res += word2[p2];
        p2++;
      }
    }

    i++;
  }

  return res;
};

mergeAlternately("ab", "pqrs");

var mergeAlternately2 = function (word1, word2) {
  let p1 = 0;
  let p2 = 0;
  let res = []; // using array because it's more effective to manipulate

  // while within bounds, add them in order
  while (p1 < word1.length && p2 < word2.length) {
    res.push(word1[p1]);
    res.push(word2[p2]);

    p1++;
    p2++;
  }

  // grab the remainders
  // if there are still elements, use them
  if (p1 < word1.length) {
    while (p1 < word1.length) {
      res.push(word1[p1]);

      p1++;
    }
  }

  if (p2 < word2.length) {
    while (p2 < word2.length) {
      res.push(word2[p2]);
      p2++;
    }
  }

  const resString = res.join(""); // transform array into string

  return resString;
};

mergeAlternately2("ab", "pqrs");

function mergeAlternately3(word1, word2) {
  let res = [];
  // we grab the max length
  let maxLength = Math.max(word1.length, word2.length);

  // loop only until max length
  for (let i = 0; i < maxLength; i++) {
    // if i is still within word1 bounds, push it
    if (i < word1.length) {
      res.push(word1[i]);
    }

    // if i is still within word2 bounds, push it
    if (i < word2.length) {
      res.push(word2[i]);
    }
  }

  return res.join("");
}

/* 
# Post Mortem

Problem: Merge strings alternately
Problem statement (one-liner): Merge two strings 
Link: https://leetcode.com/problems/merge-strings-alternately
Date: 04.11.2025

### Algorithm

1. Pattern used: 
  - Two pointers 
2. Key idea (short explanation):
  - Have a pointer for str1 and another for str2
  - 1st: merge the elements until both are within bounds
    - add first from str1
    - add second from str2 
    - increase pointers

  - 2nd: identify if there are missing elements (pointer is < than str.length)
    - if that's the case, continue merging 
3. Time to design the algorithm: 30min
4. Time to code: 20min
5. What solutions did I consider/miss?
  - I had difficulties identifying what to do with remaining elements
  - On my first solution, on the same loop I tried to deal with existing and non-existing cases, instead of doing this separately
  - I could have first dealt with the existing elements, then non-existing ones
6. Was your solution optimal?
  - The second and third one, yes
7. What triggers did I find/miss?
8. Any mistakes I keep making?
    - Break the problem as much as possible
    - Create one solution for a portion of the problem, if some cases are still left, expand it 
      - Instead of trying to solve everything at once!
   - Any bugs I should add to the Bug List?
9. What could I have done differently?
  - I could have considered treating the both situations differently
10. Takeaways
  - Make your life easier by breaking the problem down as much as possible!
  - Build a first solution, keep iterating
11. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 3
Coding: 3
Verification: 3
Communication: 3
*/
