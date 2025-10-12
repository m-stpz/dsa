/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/* 
Algo design
- Strip the string: remove empty space, punctuation

if it's empty string, it should return true

h i i h
 p1
 p2

h e y h i
p1
 p2

1. remove special characters: text.replace(/[^a-zA-Z0-9\s]/g, '')
2. remove spaces str.replace(/\s/g, '');
3. check the string

while (p2 > p1){
    if in any moment we find a non-matching combination, return false

    p1++
    p2--
}

if we ran the loop successfully, it means that we found only matching combinations, then return true
*/

/* 
Big O analysis
t: O(n) 
    n: the length of the string

s: O(1)
    - create initially a new formatted string
    - manipulate pointers
*/
var isPalindrome = function (s) {
  let cleanedUpString = s
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s/g, "")
    .toLowerCase(); // strings in js are immutable, meaning, we need to create new ones with these methods
  let p1 = 0;
  let p2 = cleanedUpString.length - 1;

  while (p2 > p1) {
    if (cleanedUpString[p1] !== cleanedUpString[p2]) {
      return false;
    }

    p1++;
    p2--;
  }

  return true;
};

isPalindrome("Hi:Ih");

/* 
# Post Mortem

Problem: Valid palindrome
Problem statement (one-liner): Check if given string is palindrome
Link: https://leetcode.com/problems/valid-palindrome/description/?envType=problem-list-v2&envId=two-pointers
Date: 12.10.2025

### Algorithm

1. Pattern used: Two pointers
2. Key idea (short explanation): 
    - Use two pointers to check the elements
    - While p2 > p1, check whether we have a unmatching combination
        - if we do, return false
    - If we run the loop successfully, meaning that all two pointers combined, we have a palindrome
3. Time to design the algorithm: 10min
4. Time to code: 5min
5. Big O analysis:
   t: O(n) / Explanation:
    n = string length 
    only one loop
   s: O(n) NOT O(1) / Explanation: 
   - because the methods replace and to lower case create new strings in memory 
   - we are actually creating 3 new strings on this algorithm
6. What solutions did I consider/miss?
    - I missed the space complexity O(n). I though it was O(1), but because we create new strings, it's O(n)
    - One thing I missed in my mental model was to identify strings as immutable. 
        So, even though I used the string methods correctly, I could have said "strings are immutable, so we need to create them, which will make our algo space comp. O(n"
7. Was your solution optimal?
    - It has a good balance of time and space complexity
8. What triggers did I find/miss?
9. Any mistakes I keep making?
    - I could solve the problem quite easily
    - The main logic is solid, however, pay attention to the condition to break the loop
        while (condition) => pay attention to this
   - Any bugs I should add to the Bug List?
10. What could I have done differently?
    - Explained about strings immutability
11. Takeaways
    - Remember strings immutability
    - Pay attention to when break the loop (condition)
12. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 4
Coding: 4
Verification: 5
Communication: 3 (didn't speak about strings immutability)
*/
