export const countLbers = () => {
  function countIdentic(arr) {
    let array = arr.reduce((acc, item) => {
      if (acc.some((elem) => item === elem)) {
        return acc;
      } else {
        if (arr.filter((it) => it === item).length > 1) {
          acc.push(item);
        }
        return acc;
      }
    }, []);
    console.log(array);
    // return accum;
  }

  console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]));
  console.log(countIdentic([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9]));
};
