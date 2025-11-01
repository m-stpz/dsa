class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function buildLinkedListFromArray(values) {
  let head = new ListNode(values[0]); // the head is the first element passed
  let current = head; // current starts with head
  let nodes = [head]; // initialize and array nodes with the first element head

  // loop after the first element, since values[0] is already added to nodes as head
  for (let i = 1; i < values.length; i++) {
    /*     
        we set the current.next as a new list node which is created from the current element
        so we just add:

        current = ListNode {val: 3, next:null} -> current = ListNode {val: 3, next:ListNode.val(2)}
    */
    current.next = new ListNode(values[i]); // current.next becomes a list node
    current = current.next; // walk current
    nodes.push(current); // add the next element to the nodes array
  }

  return head;
}

buildLinkedListFromArray([3, 2, 0, -4]);

module.exports = { buildLinkedListFromArray, ListNode };
