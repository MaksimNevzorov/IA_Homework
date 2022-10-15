export const sumArray = () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [4, 5, 6];

  const sum = (arr1, arr2) => {
    let arrMax = arr1.length >= arr2.length ? arr1 : arr2;
    let arrMin = arr1.length < arr2.length ? arr1 : arr2;
    return arrMax.map((item, i) => (arrMin[i] ? item + arrMin[i] : item));
  };
  console.log(sum(arr1, arr2));
};
