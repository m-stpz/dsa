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
  let res = [];

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

  const resString = res.join("");

  return resString;
};

mergeAlternately2("ab", "pqrs");
