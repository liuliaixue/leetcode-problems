/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let node = new ListNode();
  let l = node;

  let node1 = l1;
  let node2 = l2;

  let carry = 0;

  while (node1 || node2 || carry) {
    let sum = 0;
    if (node1 && node2) {
      sum = node1.val + node2.val + carry;
    } else if (node1) {
      sum = node1.val + carry;
    } else if (node2) {
      sum = node2.val + carry;
    } else {
      sum = carry;
    }
    node1 = node1 && node1.next;
    node2 = node2 && node2.next;
    carry = parseInt(sum / 10);

    node.val = sum % 10;
    if (node1 || node2 || carry) {
      node.next = new ListNode();
      node = node.next;
    }
  }
  return l;
};
