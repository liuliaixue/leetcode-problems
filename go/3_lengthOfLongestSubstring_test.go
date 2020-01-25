package main

import (
	"fmt"
	"testing")

func Test_lengthOfLongestSubstring(t *testing.T)  {
	fmt.Println("3 Test_lengthOfLongestSubstring")

	s := "abcabcbb"
	length := lengthOfLongestSubstring(s)
	if length != 3{
		t.Error("wrong result")
	}

}