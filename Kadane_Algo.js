function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    console.log(maxCurrent);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
}
//   -1,0 -> 0,0
//   2,0+2 -> 2,2
//   4,4+2 -> 6,6

//   console.log(maxSubArray([1,-1,3,4,5,6,-9,10,-4]));
console.log(maxSubArray([1, -1, 2, 4]));

// function bruteforce(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       console.log(i, j);
//       sum = sum + arr[j];
//     }
//   }
// }
// bruteforce([1, -1, 2, 4]);
