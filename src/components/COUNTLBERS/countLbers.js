export const countLbers = () => {
  function countIdentic(arr) {
    let accum = [];
    let array = arr.reduce((acc, item, i) => {
      return arr.indexOf(item) === i && arr.some(item)
        ? accum.push(arr[i])
        : acc;
    }, []);
    console.log(array);
    return accum;
  }

  console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]));
  console.log(countIdentic([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9]));
};
