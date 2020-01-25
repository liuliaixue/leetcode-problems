package main

import (
	"fmt"
	"testing"
)

/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/
func Test_addTwoNumbers(t *testing.T) {

	l1 := &ListNode{2, nil}
	l1.Next = &ListNode{4, nil}
	l1.Next.Next = &ListNode{3, nil}

	fmt.Println(l1.toNumber())

	l2 := &ListNode{5, nil}
	l2.Next = &ListNode{6, nil}
	l2.Next.Next = &ListNode{4, nil}
	fmt.Println(l2.toNumber())

	res := addTwoNumbers(l1, l2)
	fmt.Println(res.toNumber())
	// 	if (res == nil) {
	// 		fmt.Println(res)
	// 		t.Error("getAdmin get data error")
	//    }

	if res.toNumber() != 807 {
		t.Error("wrong result")
	}
}

/*

Explanation: 1342 + 65 = 1407.
*/
func Test_addTwoNumbers_2(t *testing.T) {

	l1 := &ListNode{2, nil}
	l1.Next = &ListNode{4, nil}
	l1.Next.Next = &ListNode{3, nil}
	l1.Next.Next.Next = &ListNode{1, nil}

	fmt.Println(l1.toNumber())

	l2 := &ListNode{5, nil}
	l2.Next = &ListNode{6, nil}
	fmt.Println(l2.toNumber())

	res := addTwoNumbers(l1, l2)
	fmt.Println(res.toNumber())
	if res.toNumber() != 1407 {
		t.Error("wrong result")
	}
}
