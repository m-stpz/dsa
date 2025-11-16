/* 
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.
Example 2:

Input: s = "aba"
Output: false
Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.

== Algo design ==
- we need to check the substring
    - how do we know what is a substring?
        - when does it end?
    if j === i 
        end substring?
    - add to substring until repetition is found
        - if no repetion is found, return false
    - substring.length % s.length !== 0
        false
        if the s.length mod substring.length isn't 0, it's also not a repeated substr pattern

substring = [a, b] 

a b c d 
^ - to compare
    ^ - the pusher
    - push p2
    if p1 === p2
        break
    p2++

if substring.length === s.length
    return false

substr = [a,b]

a b a b | a b
      ^
            ^
    
    - circularly check the substring
        arr[(index + n) % n];
    
    if (s[i] !== substr[j]){
        return false
    }

== Pseucode == 

substr = []
subp1 = 0
subp2 = 0

1. build the subtring
loop over s to build the substring
    // substring
    - if (arr[subp2] == arr[subp2]){
        break
    }
    arr.push(arr[subp2])
    subp2++

2. some checks
    if substr.length === s.length return false
    if s.length % substr.length !== 0 return false 

3. now, check the pattern
loop over s to check substr
    loop over t (circularly)
        if (arr[t] !== s[t])
            return false
        
if we didn't return false until now, return true
*/
