function numberOfWays(nums, target) {
  function dfs(i, currentSum) {
    if (i === nums.length) {
      // base condition
      return currentSum === target ? 1 : 0;
    }
    if (currentSum === target) {
      return 1;
    }

    const notTake = dfs(i + 1, currentSum);
    const add = dfs(i + 1, currentSum + nums[i]);
    const subtract = dfs(i + 1, currentSum - nums[i]);

    const totalWays = add + subtract + notTake;
    return totalWays;
  }
  return dfs(0, 0);
}
console.log(numberOfWays([-1, 9, 8, -3, 4], 5));
