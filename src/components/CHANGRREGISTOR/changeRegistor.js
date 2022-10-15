export const chengeRegistor = () => {
  const str = prompt("Введите слово", "КаЖдЫй ОхОтНиК");

  const changeRegister1 = (str) => {
    let arr = str
      .split("")
      .reduce((sum, item) =>
        item === item.toUpperCase()
          ? sum + item.toLowerCase()
          : sum + item.toUpperCase()
      );
    return arr;
  };

  const changeRegister2 = (str) => {
    let arr = str
      .split("")
      .map((item) => {
        return item === item.toUpperCase()
          ? item.toLowerCase()
          : item.toUpperCase();
      })
      .join("");
    return arr;
  };
  console.log(changeRegister1(str));
  console.log(changeRegister2(str));
  // document.writeln(changeRegister(str)); // [кАжДыЙ оХоТнИк]
};
