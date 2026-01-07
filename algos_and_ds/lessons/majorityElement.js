var majorityElement = function (nums) {
  let map = {};
  let answer = -1;
  let maxValue = -1;

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] ?? 0) + 1;
  }

  for (const [key, value] of Object.entries(map)) {
    if (value > maxValue) {
      maxValue = value;
      answer = Number(key);
    }
  }

  return answer;
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);

var majorityElementII = function (nums) {
  nums.sort((a, b) => a - b);

  let middle = Math.floor(nums.length / 2);

  return nums[middle];
};

var majorityElementIII = function (nums) {
  let count = 0;
  let answer = nums[0];

  for (let item of nums) {
    if (count <= 0) {
      answer = item;
      count = 1;
    }

    if (answer !== item) {
      count--;
    } else {
      count++;
    }
  }

  return answer;
};
