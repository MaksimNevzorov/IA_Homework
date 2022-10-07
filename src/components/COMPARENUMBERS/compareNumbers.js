export const compareNumbers = () => {
  var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

  const compare = (arr) => {
    return arr.sort((a, b) => a - b);
  };
  console.log(compare(numbers));
};
