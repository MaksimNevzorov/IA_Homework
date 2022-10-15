export const removeDuplicates = () => {
  const arr = [1, 2, 3, 1, 1, "1", "2", "1"];
  console.log(arr);
  const remove = (arr) => {
    return arr.filter((item, i) => arr.indexOf(item) === i);
  };
  console.log(remove(arr));
};
