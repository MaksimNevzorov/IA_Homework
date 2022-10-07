export const compareValue = () => {
  var litmir = [
    { author: "Хэленка", title: "Улетела сказка" },
    { author: "Коул Кресли", title: "Восстание Аркан" },
    { author: "Райчел Мид", title: "Золотая лилия" },
  ];
  const compare = (arr) => {
    return arr.sort((a, b) => (a.title.length > b.title.length ? -1 : 1));
  };
  console.log(compare(litmir));

  const compareVal = (array, key) => {
    let arr = array.map((item) => {
      return item[key];
    });
    return arr.join(", ");
  };
  console.log(compareVal(litmir, "title"));
  console.log(compareVal(litmir, "author"));
};
