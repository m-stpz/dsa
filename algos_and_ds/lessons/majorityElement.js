var majorityElement = function (nums) {
  let map = {};
  let answer = -1;

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] ?? 0) + 1;
  }

  for (const [key, value] of Object.entries(map)) {
    if (value < answer) {
      answer = key;
    }
  }

  return answer;
};
