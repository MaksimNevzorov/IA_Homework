export const arrayClone = () => {
  let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
  const arrayClone = (arr) => {
    return arr.splice(0);
  };

  let arr1 = arrayClone(vegetables);
  console.log(arr1);
};
