export const treeSum = () => {
  const arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
  const treeSumma = (array) => {
    let sum = 0;
    for (let value of array) {
      sum += +(value.length ? treeSumma(value) : value);
    }
    return sum;
  };

  console.log(treeSumma(arr));
};
