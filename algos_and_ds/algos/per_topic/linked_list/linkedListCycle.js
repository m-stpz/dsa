/* 
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

=== Algo design ===
- Identify if linked list has a cycle 
- Cycle a node can be reach again by following next
- pos: 
    - the index of the node that tail's next pointer is connected to 
    - I believe cycle is here 
    - so if there's pos, return true, else false?
        pos is either -1 or a valid index
    
function ListNode(val) {
    this.val = val;
    this.next = null;
}

- Start at the head
- Keep moving through node.next 
- At each step
    - if null is reached, no cycle
    - if encount a node that we've seen, there's a cycle
*/

const { buildLinkedListFromArray } = require("./buildLinkedList");

/**
 * Big O
 *
 * t: O(n)
 *  - n: the size of the list
 *  - traverse the list
 *
 * s: O(n)
 *  - visited: grows relative to the single elements in the list
 */
var hasCycle = function (head) {
  const visited = new Set(); // keep a set of visited elements
  let current = head;

  while (current) {
    // if this element has already been visited, there's a cycle
    if (visited.has(current)) {
      return true;
    }

    visited.add(current); // add to the set each time we visited
    current = current.next; // keep moving
  }

  return false;
};

/* 
# Post Mortem

Problem: Linked list cycle
Problem statement (one-liner): Identify if a linked list has a cycle
Link: https://leetcode.com/problems/linked-list-cycle/
Date: 01.10.25

### Algorithm

1. Pattern used: Linked list with set for visited nodes
2. Key idea (short explanation):
  - loop through linked list
    - if current has been seen, return true
    - add current to visited
    - walk current
  - if we got to the end, no cycle has been detected
3. Time to design the algorithm: 10min
4. Time to code: 10 min
5. What solutions did I consider/miss?
  - Miss:
    - how to walk this linked list
  - Considered:
    - Using map to add the visited elements
    - if element has already been found in visited, return true
6. Was your solution optimal?
  - Relatively so, except in space, where it could be constant and in mine is linear
7. What triggers did I find/miss?
8. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
9. What could I have done differently?
10. Takeaways
  - Walking linked lists
11. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving: 4
Coding: 4
Verification: 4
Communication: 4
*/

/* 
t: O(n^2)
  - n = linked_list.length
    - for each element, we add a further loop
s: O(n)
  - n = linked_list.length
*/
var hasCycleII = function (head) {
  // head might be null
  if (!head) {
    return false;
  }

  const visited = [];

  while (head) {
    for (let i = 0; i < visited.length; i++) {
      if (head.val === visited[i].val && head.next === visited[i].next) {
        return true;
      }
    }

    visited.push(head);
    head = head.next;
  }

  // for (let i = 0; i < visited.length; i++) {
  //   for (let j = 0; j < visited.length; j++) {
  //     if (i.val === j.val && i.next === j.next) {
  //       return true;
  //     }
  //   }
  // }

  return false;
};

hasCycleII(buildLinkedListFromArray([3, 2, 0, -4]));

/* 
t: O(n)
  n = ll.length
s: O(n)
  n = ll.length
*/
var hasCycleIII = function (head) {
  if (!head) {
    return false;
  }

  // set => set stores unique values
  // if element already exists, then return true
  // lookup/insert/delete O(1)
  const visited = new Set();

  while (head) {
    // checking elements on sets is: O(1)
    if (visited.has(head)) {
      return true;
    }

    visited.add(head);
    head = head.next;
  }

  return false;
};
