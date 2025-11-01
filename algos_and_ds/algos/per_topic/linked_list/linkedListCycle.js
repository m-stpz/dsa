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

var hasCycle = function (head) {
  const visited = new Set(); // keep a set of visited elements

  while (head) {
    // if this element has already been visited, there's a cycle
    if (visited.has(head)) {
      return true;
    }

    visited.add(head); // add to the set each time we visited
    head = head.next; // keep moving
  }

  return false;
};



hasCycle((head = [3, 2, 0, -4]));
