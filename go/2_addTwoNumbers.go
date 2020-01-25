package main

import (
	"fmt"
	"strconv"
)

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

type ListNode struct {
	Val  int
	Next *ListNode
}

func (node *ListNode) toString() string {
	//todo addnode to the tail
	var str string

	for {
		if node != nil {
			str = str + strconv.Itoa(node.Val)
			node = node.Next
		} else {
			break
		}
	}

	return str
}

func (node *ListNode) toNumber() int {
	//todo addnode to the tail
	var num int
	n := 1

	for {
		if node != nil {
			num = num + node.Val*n
			n = n * 10
			node = node.Next
		} else {
			break
		}
	}

	return num
}

/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {

	carry := 0
	var l3 *ListNode
	head := l3

	for l1 != nil || l2 != nil || carry != 0 {
		sum := 0
		if l1 != nil && l2 != nil {
			sum = l1.Val + l2.Val + carry
			l1 = l1.Next
			l2 = l2.Next
		} else if l1 != nil {
			sum = l1.Val + carry
			l1 = l1.Next

		} else if l2 != nil {
			sum = l2.Val + carry
			l2 = l2.Next
		} else {
			sum = carry
		}

		carry = sum / 10

		n := ListNode{Val: sum % 10}
		fmt.Println(n)
		if l3 == nil {
			l3 = &n
			head = l3
		} else {
			head.Next = &n
			head = &n
		}
	}

	return l3

}
