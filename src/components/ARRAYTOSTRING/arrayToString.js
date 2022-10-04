export const arrayToString = () => {
  var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

  const toString = (arr) => {
    return arr.toString();
  };

  let str1 = toString(vegetables);

  const toJoin = (arr) => {
    return arr.join(", ");
  };

  let str2 = toJoin(vegetables);

  console.log(str1);
  console.log(str2);

  document.writeln(str1); // "Капуста, Репа, Редиска, Морковка"
  document.writeln(str2); // "Капуста, Репа, Редиска, Морковка
};
