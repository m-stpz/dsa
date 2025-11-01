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

t: O(n * m)
    n: list1.length
    m: list2.length

s: O(n * m)
    - merge grows relative to the lists length
*/

// to continue
var mergeTwoLists = function (list1, list2) {
  // we initialize a new linked list
  const head = new ListNode(0);
  // initially, tail is equal to the head
  let tail = head;

  // while there are elements in both lists...
  while (list1 && list2) {
    // compare the elements

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
