const { buildLinkedListFromArray, ListNode } = require("./buildLinkedList");
/* 
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]


=== Algo design ===

l1: 1 2 4
    ^
l2: 1 3 4
    ^

- loop through them at the same time?
- grab their head
- are list1 and list2 the same length?
    - I won't presume so

const head1 = new ListNode(list1[0])
const head2 = new ListNode(list2[0])

let curr1 = head1
let curr2 = head2
merged = []


while (curr1 || curr2){
   if (curr1.val < curr2.val || !curr2){
    merged.push(curr1)
} else {
    merged.push(curr2)    
}

    curr1 = curr1.next
    curr2= curr2.next
}

return head merge

=== Big O analysis ===

t: O(n + m)
    n = list1.length
    m = list2.length
    - traverse each list once

s: O(1)
  - reuse existing nodes and changing next pointers
  - extra space for few pointers (constant)
*/
var mergeTwoLists = function (list1, list2) {
  // we initialize a new linked list (which will store the merged result)
  const head = new ListNode(0);
  // initially, tail is equal to the head
  let tail = head;

  // while there are elements in both lists...
  while (list1 && list2) {
    // if list1.val is less than list2.val
    if (list1.val < list2.val) {
      // add list1 current node to our new "merged" linked list
      tail.next = list1;
      // walk list 1
      list1 = list1.next;
    } else {
      // add list2 curr node to merged linked list
      tail.next = list2;
      // walk list 2
      list2 = list2.next;
    }

    // walk our merged linked list
    tail = tail.next;
  }

  // if any missing elements, add them to the tail
  tail.next = list1 || list2;

  return head.next;
};

mergeTwoLists(
  buildLinkedListFromArray([1, 2, 4]),
  buildLinkedListFromArray([1, 3, 4])
);

/* 
# Post Mortem

Problem: Merge two sorted linked lists
Problem statement (one-liner): NA
Link: https://leetcode.com/problems/merge-two-sorted-lists
Date: 02.10.2025

### Algorithm

1. Pattern used: Linked list 
2. Key idea (short explanation):
  - Create a new head 
  - Tail is equal to head
  - Loop through two lists (while list1 && list2)
    - compare the elements
    - if list1.val is greater than list2.val, it means that...
      - tail.next = list1  list1.val should be added to the sorted linked list
      - list1 = list1.next => walk list one
    - else
        ... add to the merged list the list2
        - tail.next = list2
        - list2 = list2.next 
    tail = tail.next walk tail at the end
3. Time to design the algorithm: 20min
4. Time to code: 20min
5. What solutions did I consider/miss?
  - Considered:
    - Compare the elements
    - Basic logic was thought of, but I didn't how to put it all together
  - Missed:
    - Creating a new linked list
    - Adding the elements to this list, instead of an array
    - What I'd do with the missing elements
6. Was your solution optimal?
  - Yep, t:O(n+m), s:O(1)
7. What triggers did I find/miss?
8. Any mistakes I keep making?
   - Any bugs I should add to the Bug List?
9. What could I have done differently?
10. Takeaways
  - Working with linked lists
  - Adding elements to linked lists
11. Is there anything I should add to my cheat sheet?

### Self-rating

1(terrible) - 5(amazing)

Problem solving:
Coding:
Verification:
Communication:

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // part 1: dealing with empty lists
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  // part 2: dealing with order
  let cl = list1;
  let cr = list2;
  let head = null;

  // init the head
  if (cl.val <= cr.val) {
    head = cl;
    cl = cl.next;
  } else {
    head = cr;
    cr = cr.next;
  }

  let body = head;

  // loop through both lists (until same length)
  while (cl && cr) {
    if (cl.val <= cr.val) {
      body.next = cl;
      body = cl;
      cl = cl.next;
    } else {
      body.next = cr;
      body = cr;
      cr = cr.next;
    }
  }

  if (!cl && cr) {
    body.next = cr;
  }

  if (!cr && cl) {
    body.next = cl;
  }

  return head;
};
