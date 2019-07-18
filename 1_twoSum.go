package main

import "fmt"

func main() {
	nums := []int{2, 7, 11, 15}
	target := 9
	result := twoSum(nums, target)

	fmt.Println(result)
}

func twoSum(nums []int, target int) []int {

	var res []int

	count := len(nums)
	for index := 0; index < count; index++ {
		for index2 := index + 1; index2 < count; index2++ {
			if nums[index]+nums[index2] == target {
				res = []int{index, index2}
				break
			}
		}
	}

	return res
}
