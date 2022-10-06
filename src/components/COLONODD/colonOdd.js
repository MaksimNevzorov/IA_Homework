export const colonOdd = () => {
  const num = prompt("Введите число", 55233132466545);

  const colon1 = (n) => {
    let arr = n.split("");
    let arrOdd = arr.reduce((sum, item, i, arr) =>
      arr[i] % 2 !== 0 && arr[i - 1] % 2 !== 0
        ? sum + `:${item}`
        : sum + `${item}`
    );
    return arrOdd;
  };

  console.log(colon1(num));

  const colon2 = (n) => {
    let arr = n
      .split("")
      .map((item, i, arr) => {
        return arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0
          ? `${item}:`
          : `${item}`;
      })
      .join("");
    return arr;
  };
  console.log(colon2(num));
};
