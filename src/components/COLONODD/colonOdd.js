export const colonOdd = () => {
  const num = prompt("Введите число", 55);

  const colon = (n) => {
    let arr = n.split("");
    let arrOdd = arr.reduce((sum, item, i, arr) =>
      arr[i] % 2 !== 0 && arr[i - 1] % 2 !== 0
        ? sum + `:${item}`
        : sum + `${item}`
    );
    return arrOdd;
  };
  let nu = "12334557367894";
  console.log(colon(num));
};
