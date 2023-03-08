function threeSum(nums) {
  if (!nums.length) return false;
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i] + nums[i + 1] + nums[i + 2];
    console.log(i, sum);
    if (sum === 0) ans.push([i, i + 1, i + 2]);
  }
  return ans;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
