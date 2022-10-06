export const arrayClone = () => {
  let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
  const arrayClone = (arr) => {
    return arr.splice(0);
  };

  console.log(arrayClone(vegetables));
};
