/* 
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
              ^
                       ^



Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"
Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true

====
Algo design


map
{
    what would be our key and what would be the value?
    - I think here is the secret

    0: 1
    e: 1
    g: 2
}

- how could I match them?
    e 1 = a 1 
    g 2 = d 2 

{
    a: 1
    d: 2
}

- we care about "sequence" and quantity
    - do I care only about the value? Hardly think so
- they will have the same length
- what if I match now the key, but the index?

for(const [key, valA] of Object.entries(mapA)){
    const valB = mapB[key]

    [e, "1"]
}


- the order is important? how could I store this?
- the quantity is important? 
- is the "letter" itself important or only what it represents (the count)?

[e, g, g] [a, d, d]
    ^
           ^


- what if I store?
    - how to store the "preservation" of the sequence?
        - what if I store "where" the first ocurrent happened?
        - what if we just store "the first occurrence"?
    
    next is different?
    next is same?

    1   2 (at index 2, we've seen this letter first on index 1)    
e - g - g
new - new - repeated

a - d - d 
new - new - repeated

e - g - e 
new new repeated

only if we consider "repeated":
    - only the previous element

{
    2(index):(1)first_ocurrence
}

e - g - g
    ^ 
a - d - d
        ^
b - p - p 
^

0   1   2   3   4 => compare if at that key/index we have the "expected" bool (val)
p - a - p - e - r 
new new repeated new new 
t - i - t - l - e 
new new repeated new new 

key(index?):value(letter_count)
0: 1 e
1: 1 g
2: 2 g

0: 1 a
1: 1 d
2: 2 d 

a: 1
d: 2
*/

var isIsomorphic = function (s, t) {
  let sMap = {};
  let tMap = {};

  for (let i = 0; i < s.length; i++) {}
};

isIsomorphic("egg", "add");

/* 
egg
add

isomorphic = characters in s can be replaced to get t 
- preserve the order 
- no two characters may map to the same character (unique mapping)

0 1 2
e g g

0: {
    is_new_element,
},
1: {
    is_new_element: true,
},
2: {
    is_new_element:false,
    first_encountered: 1 (index)
}

how can I identify when the element was first encountered?

a d a
0: {
    is_new_element,
},
1: {
    is_new_element: true,
},
2: {
    is_new_element:false,
    first_encountered: 0 (index)
}

0 1 2
e g g g
      ^
      ^  

0 1 2
e g e
    ^ 
^
*/

var isIsomorphic = function (s, t) {
  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; s++) {
    buildMap(sMap, nums[i]);
  }

  for (let i = 0; i < t.length; t++) {
    buildMap(tMap, nums[i]);
  }
};

function buildMap(object, key) {
  if (!object[key]) {
    object[key] = {
      isNewElement: true,
    };
  } else {
    object[key] = {
      isNewElement: false,
      // helper to track the first occurrence of an element
    };
  }
}

/*
Good stuff
- through learning
- clear communication
- concepts are becoming more solid 

To improve
- Speed 
- Design no-code solution first, then code it out
*/
