package main



// 穷举法
func lengthOfLongestSubstring(s string) int {

	res := 0

	length := len(s)
	if length <= 1 {
		return length
	}

	for left := 0; left < length; left++ {
		 mapList :=make(map[byte]int)

		for right := left + 1; right < length; right++ {
			charRight := s[right]
			if mapList[charRight] != 1 {
				mapList[charRight] = 1
				continue
			}

		}
		maplength := len(mapList)
		if maplength > res {
			res = maplength
		}

	}

	return res
}
